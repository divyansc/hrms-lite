import React from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Attendance from "./components/Attendance";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>HRMS Lite</h1>

      <div className="card">
        <AddEmployee />
      </div>

      <div className="card">
        <EmployeeList />
      </div>

      <div className="card">
        <Attendance />
      </div>
    </div>
  );
}

export default App;