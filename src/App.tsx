import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Component/AuthContext";
import ProtectedRoute from "./Component/ProtectedRoute";
import LoginPage from "./Component/LoginPage";
import UpdateEmployee from "./Component/UpdateEmployee";
import Dashboard from "./Component/Dashboard";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-employee"
            element={
              <ProtectedRoute>
                <UpdateEmployee isUpdating={false} />
                </ProtectedRoute>
            }
          />
          <Route
            path="/update-employee/:id"
            element={
              <ProtectedRoute>
                <UpdateEmployee isUpdating={true} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
