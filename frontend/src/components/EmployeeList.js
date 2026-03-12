import React,{useEffect,useState} from "react";
import axios from "axios";

function EmployeeList(){

const [employees,setEmployees]=useState([]);

const getEmployees=async()=>{

const res=await axios.get("http://127.0.0.1:8000/api/employees/");

setEmployees(res.data);

}

useEffect(()=>{

getEmployees();

},[])

return(

<div>

<h2>Employee List</h2>

<ul>

{employees.map(emp=>(

<li key={emp.id}>

{emp.full_name} - {emp.department}

</li>

))}

</ul>

</div>

)

}

export default EmployeeList;