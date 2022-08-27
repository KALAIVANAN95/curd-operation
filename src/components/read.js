import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Const/URL";

import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();



  const updateUser = ({id,firstName,lastName,checked}) => {
   
   localStorage.setItem('ID',id);
   localStorage.setItem('firstName',firstName);
   localStorage.setItem('lastName',lastName);
   localStorage.setItem('checked',checked);

   
    navigate("/update");
  };

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callGetAPI();
  };

  const callGetAPI = async () => {
    const response = await axios.get(API_URL);
    setAPIData(response.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <div>
      <table class="table text-light bg-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.checked ? "Checked" : "Not Checked"}</td>
                <td>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => updateUser(data)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
