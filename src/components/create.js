import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../Const/URL";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };

  return (
    <div>
      <form className="form-style">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        {/*         
        "start": "react-scripts start", */}
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name='checked'
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
