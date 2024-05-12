import React, { useState } from "react";
import { Input } from "antd";
import Buttoncustom  from "./Elements/Button";
import validator from "validator";
import axios from "axios";
import { message } from "antd";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();
  const  BASE_URL =   import.meta.env.VITE_BASE_URL
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    // Check if the password is alphanumeric with symbols
    if (name === "password") {
      const isValid = validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      });

      setIsPasswordValid(isValid);
    }
  };

  const handleSubmit = async () => {
    if (
      validator.isEmpty(formData.name) ||
      !validator.isEmail(formData.email) ||
      !validator.isStrongPassword(formData.password)
    ) {
      messageApi.open({
        type: "error",
        content: "Please check your input values",
        style: {
          color: "red",
        },
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/register`,
        formData
      );
      // console.log(response);

      navigate("/login");
      // window.alert("YOU HAVE SUCCESSFULLY REGISTERED");
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error.response.data.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };
// <div className = "flex flex-col items-center">
  return (
  <>
 <h2>Sign Up</h2>
      <div className=" flex flex-shrink mx-auto aspect-auto mt-2 sm:mt-3 md:mt-5 lg:mt-7 h-1/2 max-h-80 bg-white  rounded-3xl overflow-hidden shadow-md w-auto md:flex-row md:w-fit  ">
  <section className="grid place-items-center w-full md:w-1/2 bg-white  shadow-md  ">
  <div className = "flex flex-col items-center justify-center  transition-all py-5 md:py-6 w-3/5 h-full ">
      {contextHolder}
      <form className="max-w-xl w-full space-y-4">
        <Input className="border-2 border-gray-400" onChange={handleUserInput} name="name" placeholder="Name" allowClear />
        <Input className="border-2 border-gray-400" onChange={handleUserInput} name="email" placeholder="Email" allowClear />
        <Input.Password
        className="border-2 border-gray-400"
          onChange={handleUserInput}
          name="password"
          placeholder="Password" allowClear
        />
        {!isPasswordValid && (
          <p style={{ color: "red" }}>
            Password must be alphanumeric, symbols and not less than 8 char
          </p>
        )}

<div className= "flex  flex-col -mt-1  text-base md:text-sm  ">
          Already have an account? 
          <div>
          <Link to="/login" className="-mt-2 text-sm text-blue-600 ">
          Login
        </Link>
        </div>
          </div>
         
         
        <Buttoncustom className="" type="primary" onClick={handleSubmit} loading={loading} text = "Register user">
          
        </Buttoncustom>
      </form>
      </div>


    </section>


    <div className="flex-1 relative overflow-hidden bg-white rounded-md shadow-md">
  <video className="w-full h-full object-cover" src="/gmcads-login-vdo.mp4" autoPlay loop muted playsInline></video>
</div>





  </div>
  
  
  
  </>


  );
};

export default Register;
