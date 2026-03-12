import React, {useState} from "react";
import axios from "axios";

function AddEmployee(){

const [form,setForm]=useState({
employee_id:"",
full_name:"",
email:"",
department:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{
e.preventDefault();

try{

await axios.post("https://hrms-lite-xpi6.onrender.com/api/employees/",form);

alert("Employee Added");

}catch(err){
alert("Error adding employee");
}

}

return(

<div>

<h2>Add Employee</h2>

<form onSubmit={handleSubmit}>

<input
name="employee_id"
placeholder="Employee ID"
onChange={handleChange}
/>

<br/>

<input
name="full_name"
placeholder="Full Name"
onChange={handleChange}
/>

<br/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/>

<input
name="department"
placeholder="Department"
onChange={handleChange}
/>

<br/>

<button type="submit">Add</button>

</form>

</div>

)

}

export default AddEmployee;