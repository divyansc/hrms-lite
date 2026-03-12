import axios from "axios";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;

function AddEmployee() {

  const [employeeId, setEmployeeId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/employees/`, {
        employee_id: employeeId,
        full_name: fullName,
        email: email,
        department: department
      });

      alert("Employee added successfully");

    } catch (error) {
      console.error(error.response.data);
      alert("Failed to add employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Employee ID"
        value={employeeId}
        onChange={(e)=>setEmployeeId(e.target.value)} />

      <input placeholder="Full Name"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)} />

      <input placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />

      <input placeholder="Department"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)} />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;