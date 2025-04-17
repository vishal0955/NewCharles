import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {




    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    // Predefined Credentials for Testing (You can replace this with API call)
    const predefinedUsers = {
        admin: { email: "admin@example.com", password: "admin123", role: "admin" },
        superAdmin: { email: "superadmin@example.com", password: "superadmin123", role: "superadmin" },
        // client: { email: "client@example.com", password: "client123", role: "client" },
        manager: { email: "manager@example.com", password: "manager123", role: "manager" },
        employee: { email: "employee@example.com", password: "employee123", role: "employee" }
    };

    // Function to Autofill Credentials
    const handleRoleSelect = (selectedRole) => {
        setEmail(predefinedUsers[selectedRole].email);
        setPassword(predefinedUsers[selectedRole].password);
        setRole(predefinedUsers[selectedRole].role);
    };

    // Function to Handle Login
    const handleLogin = () => {
        if (!email || !password || !role) {
            alert("Please enter credentials or select a role.");
            return;
        }

        localStorage.setItem("userRole", role);
        localStorage.setItem("userEmail", email);
        navigate(`/${role}`);
    };





  const [isSignUp, setIsSignUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className="login-body">
        <div className="login-signup__main">
          <div
            className={`login-signup__container login-signup__container--signup ${
              !isSignUp ? "login-signup__is-txl" : ""
            }`}
            id="signup-container">
            <form
              className="login-signup__form"
              id="signup-form"
              onSubmit={handleSubmit}>
              <h2 className="login-signup__form-title">Create Account</h2>
              <div className="login-signup__form-icons"></div>
              <span className="login-signup__form-span">
                or use email for registration
              </span>
              <input
                className="login-signup__form-input"
                type="text"
                placeholder="Name"
              />
              <input
                className="login-signup__form-input"
                type="text"
                placeholder="Email"
              />
              <input
                className="login-signup__form-input"
                type="password"
                placeholder="Password"
              />
              <button className="login-signup__button login-signup__button--submit">
                SIGN UP
              </button>
            </form>
          </div>

          <div
            className={`login-signup__container login-signup__container--signin ${
              !isSignUp ? "login-signup__is-txl login-signup__is-z200" : ""
            }`}
            id="signin-container">
            <form
              className="login-signup__form"
              id="signin-form"
              onSubmit={handleSubmit}>
              <h2 className="login-signup__form-title">Sign in</h2>
              <div className="login-signup__form-icons"></div>
              <span className="login-signup__form-span">
                or use your email account
              </span>
              <input
                className="login-signup__form-input"
                value={email}
                    onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                className="login-signup__form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a className="login-signup__form-link">Forgot your password?</a>
              <button className="login-signup__button login-signup__button--submit" onClick={handleLogin}>
                SIGN IN
              </button>
              
              <h3 className="text-lg font-medium text-center mt-4">Select Role</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {Object.keys(predefinedUsers).map((userRole) => (
                        <button
                            key={userRole}
                            onClick={() => handleRoleSelect(userRole)}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-[#4b70e2] hover:text-white transition"
                        >
                            {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                        </button>
                    ))}
                </div>
            </form>
            
          </div>

          <div
            className={`login-signup__switch ${
              !isSignUp ? "login-signup__is-txr" : ""
            }`}
            id="switch-container">
            <div
              className={`login-signup__switch-circle ${
                !isSignUp ? "login-signup__is-txr" : ""
              }`}></div>
            <div
              className={`login-signup__switch-circle login-signup__switch-circle--top ${
                !isSignUp ? "login-signup__is-txr" : ""
              }`}></div>

            <div
              className={`login-signup__switch-container ${
                !isSignUp ? "login-signup__is-hidden" : ""
              }`}
              id="switch-signin">
              <h2 className="login-signup__switch-title">Welcome Back!</h2>
              <p className="login-signup__switch-description">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="login-signup__switch-button login-signup__button"
                onClick={changeForm}>
                SIGN IN
              </button>
              
            </div>
            

            <div
              className={`login-signup__switch-container ${
                isSignUp ? "login-signup__is-hidden" : ""
              }`}
              id="switch-signup">
              <h2 className="login-signup__switch-title">Hello Friend!</h2>
              <p className="login-signup__switch-description">
                Enter your personal details and start journey with us
              </p>
              <button
                className="login-signup__switch-button login-signup__button"
                onClick={changeForm}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;
