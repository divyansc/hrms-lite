import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${API}/employees/`)
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employees</h2>

      {employees.map(emp => (
        <div key={emp.employee_id}>
          {emp.full_name} - {emp.department}
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;