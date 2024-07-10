import toast from "react-hot-toast";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup({ setAuthState }) {
  const baseUrl = import.meta.env.VITE_DEV_URL;
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    const signupData = Object.fromEntries(new FormData(e.target));
    const toastId = toast.loading("Creating account ...");

    await axios
      .post(baseUrl + "/auth/register", signupData)
      .then((res) => {
        toast.success("Account created successful", { id: toastId });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status && err.response.status === 400) {
          return toast.error(err.response.data || "Something went wrong", {
            id: toastId,
          });
        }
        toast.error("Unable to create account", { id: toastId });
      });
  };
  return (
    <div className="auth_screen">
      <form onSubmit={signup}>
        <h2 className="h-200">Create a new Account</h2>
        <label htmlFor="username">
          <p className="text-body">Username</p>
          <input type="text" name="username" id="username" required />
        </label>
        <label htmlFor="email">
          <p className="text-body">Email Address</p>
          <input type="text" name="email" id="email" required />
        </label>
        <label htmlFor="password">
          <p className="text-body">Password</p>
          <input type="password" name="password" id="password" required />
        </label>
        <button type="submit">Create Account</button>

        <div className="change_auth_screen text-body">
          <p>Have an Account?</p>
          <p className="cta" onClick={() => setAuthState("login")}>
            Login
          </p>
        </div>
      </form>
    </div>
  );
}
