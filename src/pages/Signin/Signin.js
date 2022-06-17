import "./signin.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Signin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      setAuth((user) => ({
        ...user,
        isAuthenticated: true,
        token: response.data.encodedToken,
      }));

      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form className="display-flex-column">
        <input
          type="email"
          className="form-field"
          placeholder="Enter your email here"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="form-field"
          placeholder="Enter your password here"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <button
          className="login-btn"
          onClick={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          LOGIN
        </button>

        <button
          className="login-guest-btn btn-primary-outline"
          onClick={(e) => {
            e.preventDefault();
            setFormData({
              email: "shubh870@gmail.com",
              password: "shubh123",
            });
            loginHandler();
          }}
        >
          LOGIN AS GUEST
        </button>
        <p>
          Not registered yet?
          <Link to="/signup" className="signup-link">
            Create your account
          </Link>
        </p>
      </form>
    </div>
  );
};


export {Signin};