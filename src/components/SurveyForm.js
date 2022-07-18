import React, { useState } from "react";
import "../App.css";
import "./SurveyForm.css";

export default function SurveyForm() {
  const [values, setValues] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleQ1InputChange = (event) => {
    setValues({ ...values, q1: event.target.value });
  };
  const handleQ2InputChange = (event) => {
    setValues({ ...values, q2: event.target.value });
  };
  const handleQ3InputChange = (event) => {
    setValues({ ...values, q3: event.target.value });
  };
  const handleQ4InputChange = (event) => {
    setValues({ ...values, q4: event.target.value });
  };
  const handleQ5InputChange = (event) => {
    setValues({ ...values, q5: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.q1 && values.q2 && values.q3 && values.q4 && values.q5) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <h1 className="surveyform">FORM</h1>
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div class="success-message">
            Success! Thank you for completing the !
          </div>
        ) : null}

        <div className="question">Q1: </div>
        <input
          onChange={handleQ1InputChange}
          value={values.q1}
          class="form-field"
          type="text"
          placeholder="N/A"
          name="q1"
        />
        {submitted && !values.q1 ? (
          <span id="first-name-error">Please enter a </span>
        ) : null}

        <div className="question">Q1: </div>
        <input
          onChange={handleQ2InputChange}
          value={values.q2}
          class="form-field"
          type="text"
          placeholder="N/A"
          name="q2"
        />
        {submitted && !values.q2 ? (
          <span id="first-name-error">Please enter a </span>
        ) : null}

        <div className="question">Q1: </div>
        <input
          onChange={handleQ3InputChange}
          value={values.q3}
          class="form-field"
          type="text"
          placeholder="N/A"
          name="q3"
        />
        {submitted && !values.q3 ? (
          <span id="first-name-error">Please enter a </span>
        ) : null}

        <div className="question">Q1: </div>
        <input
          onChange={handleQ4InputChange}
          value={values.q4}
          class="form-field"
          type="text"
          placeholder="N/A"
          name="q4"
        />
        {submitted && !values.q4 ? (
          <span id="first-name-error">Please enter a </span>
        ) : null}

        <div className="question">Q1: </div>
        <input
          onChange={handleQ5InputChange}
          value={values.q5}
          class="form-field"
          type="text"
          placeholder="N/A"
          name="q5"
        />
        {submitted && !values.q5 ? (
          <span id="first-name-error">Please enter a </span>
        ) : null}

        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
