import React, { useState, useEffect } from "react";
import axios from "axios";

function Attendance() {

const [employees,setEmployees]=useState([]);
const [employee,setEmployee]=useState("");
const [date,setDate]=useState("");
const [status,setStatus]=useState("Present");
const [records,setRecords]=useState([]);

useEffect(()=>{
getEmployees();
},[])

const getEmployees = async () => {

try{

const API = process.env.REACT_APP_API_URL;
const res = await axios.get(`${API}/employees/`);
setEmployees(res.data);

}catch(err){

console.log(err);

}

}

const submitAttendance = async () => {

try{

const API = process.env.REACT_APP_API_URL;
await axios.post(`${API}/attendance/`,{
employee:employee,
date:date,
status:status
})

alert("Attendance marked successfully");

getAttendance();

}catch(err){

if(err.response && err.response.data.error){

alert(err.response.data.error);

getAttendance();

}else{

alert("Error marking attendance");

}

}

}

const getAttendance = async () => {

try{

const API = process.env.REACT_APP_API_URL;
const res = await axios.get(`${API}/attendance/${employee}/`);
setRecords(res.data);

}catch(err){

console.log(err);

}

}

return(

<div>

<h2>Mark Attendance</h2>

<select onChange={(e)=>setEmployee(e.target.value)}>

<option>Select Employee</option>

{employees.map(emp=>(
<option key={emp.id} value={emp.id}>
{emp.full_name}
</option>
))}

</select>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<select onChange={(e)=>setStatus(e.target.value)}>
<option>Present</option>
<option>Absent</option>
</select>

<button onClick={submitAttendance}>
Mark Attendance
</button>

<h3>Attendance Records</h3>

<ul>

{records.map(r=>(
<li key={r.id}>
{r.date} - {r.status}
</li>
))}

</ul>

</div>

)

}

export default Attendance;