import React, { useState } from "react";
import "./Login.css";
import IconButton from "../Button";
import axios from "axios";
import swal from "sweetalert";

function Login() {
  const Closebtn = () => {
    document.getElementById("cross").style.display = "none";
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formData2, setFormData2] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("log:", formData);
    const result = await axios.post("http://localhost:3000/login", formData);
    console.log("result:", result.data);

    const result2 = await axios.get("http://localhost:3000/user", formData2);
    console.log("log:", result2);
    if ((formData2.email = "" || formData2.password == "")) {
      swal("Success!", "You have successfully logged in!", "success");
    } else {
      swal("Error!", "Invalid email or password.", "error");
    }
  }

  return (
    <div id="cross" className="loginMain">
      <form onSubmit={handleSubmit} className="form">
        <div className="imgContainer">
          <span onClick={Closebtn}>&times;</span>
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
          />
        </div>
        <div className="containerLogin">
          {/* <label for="username">Username</label> */}
          <input
            type="email "
            placeholder="Enter Email address "
            name="username"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          {/* <label for="password">
              // <b>Password</b>
            </label> */}
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <div className="formloginbtn">
            <IconButton label="Login" color="formSubmitbtn" />
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
        </div>
        <div className="container">
          <div className="loginformFooter">
            <IconButton onClick={Closebtn} label="Cancel" color="cancelbtn" />
            <p>
              <a href="#">Forget Password?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
