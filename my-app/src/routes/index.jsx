import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/UserInfo";

function Rountes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" elemt={<User />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rountes;
