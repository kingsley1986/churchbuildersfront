import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { useState, useEffect, useRef, useCallback } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import env from "react-dotenv";

import "../components/contactform.css";


export default function ContactForm(props) {
  const initialValues = { name: "", email: "", request: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [token, setToken] = useState("");
  const reCaptcha = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const onPageLoad = () => { };
  useEffect(() => {
    onPageLoad();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit && token) {
      console.log(formValues);

      axios
        .post("https://churchbuildersbackend.fly.dev/contact_form", {
         ...formValues,
          token,
        })

        .then(function (response) {
          onPageLoad();
          alert("Submitted Succefully");
        })

        .catch(function (err) {
          console.log(err);
        })
        .finally(() => {
          for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
              formValues[key] = ""
            }
          }

          reCaptcha.current.reset();
          setToken("");
        });
    
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.request) {
      errors.request = "request is required";
    } else if (values.request.length < 4) {
      errors.request = "Message must be more than 4 characters";
    }else if(!token) {
      errors.token = "Verify that you are not a robot"
    
    }
    return errors;
  };

  return (
    <div class="container center_div">
       {Object.keys(formErrors).length === 0 && isSubmit && token ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{(formValues, undefined)}</pre>
      )}
      <div className="contactFormApp">
        <p>Send your prayer request here</p>
        <div>
          <form onSubmit={handleSubmit}>
            
            <label>Name</label>
              <p style={{color: "red"}}>{formErrors.name}</p>

            <input
              className="contactinput"
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
               value={formValues.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <p style={{color: "red"}}>{formErrors.email}</p>
            <input
              className="contactinput"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={handleChange}
            />

            <label>Message</label>
            <p style={{color: "red"}}>{formErrors.request}</p>
            <textarea
              className="contactinput"
              placeholder="Type you message here.."
                type="textarea"
              name="request"
               value={formValues.request}
              onChange={handleChange}
            />
             <div className="captcha" style={{transform:"scale(0.70)", transformOrigin:"0 0", textAlign: "center"}}>
            <p style={{color: "red", fontSize: 20}}>{formErrors.token}</p>
            <ReCAPTCHA
            
              ref={reCaptcha}
              sitekey={process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
              onChange={(token) => setToken(token)}
              onExpired={(e) => setToken("")}
              className="g-recaptcha"
            />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

