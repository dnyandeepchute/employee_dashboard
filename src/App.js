import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "./EmployeeDashboard";
import EmployeeDetail from "./EmployeeDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;