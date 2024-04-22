import React,{useState} from "react";
const Form = () =>{
  const [formData,setFormData]= useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:'',

  });
  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name]:value,

    });
  };
const handleSubmit = (e) => {
  e.preventDefault(),
  console.log(formData)
  
  setFormData({
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
  });
};




  return(
    <div>

    </div>
  )
}
export default Form;