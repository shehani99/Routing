import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        <li>Employee 1</li>
        <li>Employee 2</li>
        <li>Employee 3</li>
      </ul>
      <Link to="/add-employee">Add Employee</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
