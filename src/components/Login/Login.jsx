import React from "react";
import "./Login.css";
import IconButton from "../Button";

function Login() {
  const Closebtn = () => {
    document.getElementById("cross").style.display = "none";
  };
  return (
    <div id="cross" className="loginMain">
      <form action="" className="form">
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
            required
          />

          {/* <label for="password">
              // <b>Password</b>
            </label> */}
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
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
