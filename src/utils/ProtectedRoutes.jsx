import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? children : <Navigate to="/auth" />;
}
