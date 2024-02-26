import { VscOrganization } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect, useState } from "react";
import React from "react";
import Batches from "./Batches";
const EmployeeDetails = ({ val }) => {
  let { empId, name, email, password, phone, batchs ,userRole} = val;





  return (
    <div className="empMainDiv">
        <div>
        <div className="empProfile">
      <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="Employee" />
      <h2 className="employeeName">{name}</h2>
       <p>{userRole}</p>
   
      <div className="emp-details">
        <span id="empId">
         EmpId:
          
        </span>
        <p>{empId}</p>
      </div>
      <div className="emp-details">
        <span>
          <MdOutlineMail title="email" />
          
        </span>
        <p>{email}</p>
      
      </div>
      <div className="emp-details">
        <span>
          <FaPhoneVolume />
        
        </span>
        <p>{phone}</p>
      </div>
      </div>
      </div>
      <div id="employeeBatch">
          <Batches batchs={batchs}/>
      </div>
    </div>

  );
};

export default EmployeeDetails;
