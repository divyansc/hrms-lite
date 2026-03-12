import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function Attendance() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${API}/employees/`)
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Attendance</h2>

      {employees.map(emp => (
        <div key={emp.employee_id}>
          {emp.full_name}
        </div>
      ))}
    </div>
  );
}

export default Attendance;