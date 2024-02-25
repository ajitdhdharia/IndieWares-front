import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(userData)
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if(!response.ok){
        throw new Error('Network response was not OK');
      }
    } catch(error) {
      console.error('Error submitting form', error)
    }
  };

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onInputChange={handleInputChange}
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onInputChange={handleInputChange}
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  onInputChange={handleInputChange}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onInputChange={handleInputChange}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      type="submit"
                      className="signup button border-0 px-3 py-2"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
