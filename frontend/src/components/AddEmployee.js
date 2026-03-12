import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {

  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://hrms-lite-xpi6.onrender.com/api/employees/",
        form,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert("Employee Added Successfully");

      console.log(response.data);

      // reset form
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: ""
      });

    } catch (err) {

      console.error(err.response?.data);
      alert("Error adding employee");

    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="employee_id"
          placeholder="Employee ID"
          value={form.employee_id}
          onChange={handleChange}
        />

        <br />

        <input
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
        />

        <br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <br />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddEmployee;