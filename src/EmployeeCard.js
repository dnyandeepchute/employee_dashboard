import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee, handleSelect, isSelected }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsDeleted(true);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    alert("Edit button clicked for " + employee.employee_name);
  };

  if (isDeleted) return null;

  return (
    <div
      className="employee-card"
      onClick={() => navigate(`/employee/${employee.id}`)}
      style={{ border: isSelected ? "2px solid red" : "1px solid #ccc" }}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => {
          e.stopPropagation();
          handleSelect(employee.id);
        }}
      />
      <h2>{employee.employee_name}</h2>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default EmployeeCard;