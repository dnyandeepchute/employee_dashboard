import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleSearch = () => {
    if (searchId) {
      const searchedEmployee = employees.find(
        (emp) => emp.id === parseInt(searchId)
      );
      if (searchedEmployee) setEmployees([searchedEmployee]);
    }
  };

  const handleSelect = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((empId) => empId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setEmployees((prev) => prev.filter((emp) => !selectedEmployees.includes(emp.id)));
    setSelectedEmployees([]);
  };

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <button onClick={handleDeleteSelected} disabled={selectedEmployees.length === 0}>
        Delete Selected Employees
      </button>

      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            handleSelect={handleSelect}
            isSelected={selectedEmployees.includes(employee.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
