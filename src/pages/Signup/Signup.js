import "./signup.css";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const Signup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        name: userSignup.name,
        email: userSignup.email,
        password: userSignup.password,
        confirmPassword: userSignup.confirmPassword,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);

      setAuth((user) => ({
        ...user,
        isAuthenticated: true,
        token: response.data.encodedToken,
      }));

      navigate("/home-page");
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP</h1>
      <form className="display-flex-column">
        <div className="display-flex-row">
          <label className="form-label">Email</label>
          <input
            type="email"
            class="form-field"
            placeholder="shubham@gmail.com"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({ ...userSignup, email: e.target.value });
            }}
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Enter new password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({ ...userSignup, password: e.target.value });
            }}
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Re-type your password"
            value={userSignup.confirmPassword}
            onChange={(e) => {
              setUserSignup({ ...userSignup, confirmPassword: e.target.value });
            }}
          />
        </div>

        <button
          className="register-btn"
          onClick={(e) => {
            e.preventDefault();
            signupHandler();
          }}
        >
          Register
        </button>
        <p>
          Already registered ?
          <Link to="/signin" className="login-link">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export { Signup };
