import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const FormComp = () => {
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




``
  

  let payload = {
    "userId": 0,
    "empId": empId,
    "email":email,
    "name": name,
    "password": "string",
    "phone": phone,
    "userRole": userRole,
    "userStatus": userStatus,
    "userCategory": "TRAINER",
    "timeSheets": [],
    "batchs": [],
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
    console.log(payload);
    console.log(isFocused);
    if(employeeData.phone.length==10){
      postdata();
    }else{
      toast.error("please Check the Phone Number");
      // alert("Gendle Man please Check the Phone number");

    }
   
    // console.log(payload);

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    
    
  };


  const [isFocused, setIsFocused] = useState({
    empId: false,
        name: false,
        email: false,
        phone: false,
        userRole: false,
        userStatus: false,
  });
   

  
  
    const handleFocus = (name) => {
    
             setIsFocused({...isFocused,[name]:true})
    };
  
    const handleBlur = (name) => {

      setIsFocused({...isFocused,[name]:false});
    };
  
    const handleInputChange = (e) => {
      
       handleChange(e)

       if(e.target.value.length!==0){
       handleFocus(e.target.name)
       }else{
        handleBlur(e.target.name)
       }
     
    };


    let [open,SetOpen]=useState(true);

    let handleCloseButton=()=>{
      SetOpen(!open)
    }




  return (
   
   <div>
    {
      open &&
      <div className="form">
        <div className="employee-container">
          <div>
          <h2>Create Employee   <button id="close-btn" onClick={handleCloseButton}>X</button></h2>
         
          </div>
          <form className="employee-form" onSubmit={handleSubmit}>
            <div className="fd">
              <div className="wrap">
              
                <input
                  type="text"
                  id="employeeId"
                  name="empId"
                  value={empId}
                  onChange={handleInputChange}
                  className={isFocused.empId?"focus":""}
                  required
                />
                  <label htmlFor="employeeId"
                  >Employee ID</label>
              </div>

              <div className="wrap">
                <input
                  type="text"
                  id="employeeName"
                  name="name"
                  value={name.toUpperCase()}
                  required
                  className={isFocused.name?"focus":""}
                  onChange={handleInputChange}
                    />
                     <label htmlFor="employeeName">Name</label>
              </div>
            </div>

            <div className="fd">
              <div className="wrap">
               
                <input
                  type="email"
                  id="employeeEmail"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className={isFocused.email?"focus":""}
                  required
                />
                 <label htmlFor="employeeEmail">Email</label>
              </div>

              <div className="wrap">
                
                <input
                  type="tel"
                  id="employeePhone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  className={isFocused.phone?"focus":""}
                
                  required
                />
                <label htmlFor="employeePhone">Phone Number</label>
              </div>
            </div>

            <div className="fd">
              <div className="wrap">
               
                <select
                  id="userRole"
                  name="userRole"
                  value={userRole.toUpperCase()}
                  onChange={handleInputChange}
                  className={isFocused.userStatus?"focus":""}
                  required
                >
                    <option value=""></option>
                  <option value="TRAINER">TRAINER</option>
                  <option value="LATERAL">LATERAL</option>
                </select>
                <label htmlFor="userRole">User Role</label>
              </div>

              <div className="wrap">
               
                {/* <input
                
                  name="userStatus"
                  value={employeeData.userStatus.toUpperCase()}
                  onChange={handleChange}
                  className={isFocused.userStatus?"focus":""}
                  required
                  list="userStatus"
                />
                     <label htmlFor="userStatus">User Status</label>
                  <datalist id="userStatus"  name="userStatus" >
                 
                  <option name="userStatus" value="ACTIVE">ACTIVE</option>
                  <option name="userStatus" value="IN_ACTIVE">IN_ACTIVE</option>
                  </datalist> */}
                
             <select
                  id="userStatus"
                  name="userStatus"
                  value={userStatus.toUpperCase()}
                  onChange={handleInputChange}
                  className={isFocused.userStatus?"focus":""}
                  required
                >
                   <option value=""></option>
                  <option value="ACTIVE">Active</option>
                  <option value="IN_ACTIVE">In Active</option>
                </select>
                <label htmlFor="userRole">User Status</label>


             
              </div>
            </div>

            <button type="button" onClick={hadleButton} id="createEmployeebtn">
              Create Employee
            </button>
          </form>
        </div>
      </div>
        }
        <Toaster/>
      </div>  
    
  );
};

export default FormComp;






