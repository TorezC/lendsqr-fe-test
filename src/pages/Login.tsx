import signin from "./../assets/signin.svg";
import logo from "./../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [text, setText] = useState('SHOW');
  const [passwordVisibility, setPasswordVisibility] = useState('');

  const handleVisibility = () => {
    if (text === "SHOW") {
      setText("HIDE");
      setPasswordVisibility("text");
    } else if (text === "HIDE") {
      setText("SHOW");
      setPasswordVisibility("password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-head">
        <a href="https://lendsqr.com">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="login-form-container">
        <div className="login-img">
          <img src={signin} alt="signin" />
        </div>
        <div className="login-content">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form>
            <div className="login-input">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="login-input password">
              <input type={passwordVisibility} placeholder="Password" className="form-input" />
              <div onClick={handleVisibility} className="show">{text}</div>
            </div>
            <Link to="/" className="forgot">FORGOT PASSWORD?</Link>
            <button className="login-btn">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
