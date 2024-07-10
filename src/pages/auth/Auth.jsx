import { useEffect, useState } from "react";
import "./auth.css";
import Login from "./Login";
import Signup from "./Signup";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const [authState, setAuthState] = useState("login");
  const user = localStorage.getItem("user");

  useEffect(() => {
    document.title = "Runo - Auth";
  }, []);

  const AuthPage = authState === "login" ? Login : Signup;
  return user ? (
    <Navigate to="/user" />
  ) : (
    <div className="auth">
      <div className="auth_left">
        <AuthPage setAuthState={setAuthState} />
      </div>
      <div className="auth_right">
        <img
          src="https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3N8ZW58MHx8MHx8fDA%3D"
          alt="Runo"
        />
      </div>
    </div>
  );
}
