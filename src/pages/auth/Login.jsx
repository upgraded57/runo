import toast from "react-hot-toast";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthState }) {
  const baseUrl = import.meta.env.VITE_DEV_URL;
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const loginData = Object.fromEntries(new FormData(e.target));
    const toastId = toast.loading("Login in ...");

    await axios
      .post(baseUrl + "/auth/login", loginData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("Login successful", { id: toastId });
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status && err.response.status === 400) {
          return toast.error(err.response.data || "Something went wrong", {
            id: toastId,
          });
        }
        toast.error("Unable to login", { id: toastId });
      });
  };
  return (
    <div className="auth_screen">
      <form onSubmit={login}>
        <h2 className="h-200">Login to your Account</h2>
        <label htmlFor="username">
          <p className="text-body">Username</p>
          <input type="text" name="username" id="username" required />
        </label>
        <label htmlFor="password">
          <p className="text-body">Password</p>
          <input type="password" name="password" id="password" required />
        </label>
        <button type="submit">Login</button>

        <div className="change_auth_screen text-body">
          <p>New User?</p>
          <p className="cta" onClick={() => setAuthState("signup")}>
            Create Account
          </p>
        </div>
      </form>
    </div>
  );
}
