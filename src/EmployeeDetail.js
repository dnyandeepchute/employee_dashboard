import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data.data))
      .catch((error) => console.error("Error fetching employee details:", error));
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.employee_name}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
    </div>
  );
};

export default EmployeeDetail;