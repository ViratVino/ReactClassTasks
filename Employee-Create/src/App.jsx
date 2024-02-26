import React, { useEffect, useState } from "react";
import "./global.css";
import axios from "axios";
import toast from "react-hot-toast";

const App = () => {
  const [employeeData, setEmployeeData] = useState({
    empId: "",
    name: "",
    email: "",
    phone: "",
    userRole: "",
    userStatus: "",
  });

  let { empId, name, email, phone, userRole, userStatus } = employeeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  let payload = {
    userId: 0,
    empId: empId,
    name: name,
    password: "string",
    phone: phone,
    userRole: userRole,
    userStatus: userStatus,
    userCategory: "TRAINER",
    timeSheets: [],
    batches: [],
  };

  // let payload=JSON.stringify(employeeData);

  let postdata = async () => {
    try {
      await axios.post("http://106.51.76.167:8080/user", payload);
      toast.success("Data Created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Data Not Created");
    }
  };

  const hadleButton = () => {
    console.log(JSON.stringify(employeeData));
    postdata();
    // console.log(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeData);
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className="craete">Create</h1>
        <h1 className="employee">Employee</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          placeat consectetur animi eaque ducimus rerum error soluta culpa
          inventore numquam eligendi, laboriosam veniam deserunt unde, totam
          officia eum quas reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure architecto nemo quae minima delectus exercitationem alias voluptas tempora, officia, voluptatibus fugit reiciendis, iste dicta dolorum in quo ex rerum enim.
          Aliquid adipisci veniam corporis itaque labore deserunt, id vero repellendus, consectetur, velit iure provident ipsa? Voluptate deleniti ducimus cum laboriosam fugiat dignissimos eum quod omnis placeat modi, obcaecati sed quia.
          Excepturi soluta iure dolorem, eum, voluptate labore tempore numquam beatae dignissimos facere atque. Nisi nobis, atque deserunt quisquam tempora explicabo, ullam pariatur rem odit magni, eveniet voluptatum. Nisi, maiores illum?
          Odit, minima illum vero aperiam doloremque hic similique delectus nam architecto? Odit quibusdam ea dolore illo quaerat porro consectetur aut debitis obcaecati ullam odio, veritatis dolorem fuga eaque mollitia soluta?
        </p>
      </div>

      <div className="form">
        <div className="employee-container">
          <h2>Employee Information</h2>
          <form className="employee-form" onSubmit={handleSubmit}>
            <div className="fd">
              <div className="wrap">
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                  type="text"
                  id="employeeId"
                  name="empId"
                  value={empId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="wrap">
                <label htmlFor="employeeName">Name:</label>
                <input
                  type="text"
                  id="employeeName"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="fd">
              <div className="wrap">
                <label htmlFor="employeeEmail">Email:</label>
                <input
                  type="email"
                  id="employeeEmail"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="wrap">
                <label htmlFor="employeePhone">Phone Number:</label>
                <input
                  type="tel"
                  id="employeePhone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="fd">
              <div className="wrap">
                <label htmlFor="userRole">User Role:</label>
                <select
                  id="userRole"
                  name="userRole"
                  value={userRole.toUpperCase()}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="TRAINER">TRAINER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>

              <div className="wrap">
                <label htmlFor="userStatus">User Status:</label>
                <input
                  id="userStatus"
                  name="userStatus"
                  value={userStatus.toUpperCase()}
                  onChange={handleChange}
                  required
                />
                  <datalist id="userStatus">
                 
                  <option value="ACTIVE"></option>
                  <option value="IN_ACTIVE">IN_</option>
                  </datalist>
             
              </div>
            </div>

            <button type="button" onClick={hadleButton}>
              Create Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
