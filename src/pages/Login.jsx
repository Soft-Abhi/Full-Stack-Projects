import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset link has been sent to your email.");
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="bg-white bg-opacity-75 p-4 rounded shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3 text-end">
            <button type="button" className="btn btn-link p-0" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
