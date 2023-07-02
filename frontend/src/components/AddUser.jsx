import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
  
const AddUser = () => {

const defaultValue ={
  name:'',
  username:'',
  email :'',
  phone:''
}


const [user,setUser] =useState(defaultValue);
const navigate = useNavigate();

  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }


  const addUserDetails = async() => {
    await addUser(user);
    navigate('/all');
}
  return (
    <>
    <h4 className='text-center mt-5'>Add Details</h4>

   <form className="row g-3 m-5">
  <div className="col-md-3">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='name'/>
  </div>

  <div className="col-md-3">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='username'/>
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault02" className="form-label">Email</label>
    <input type="email" className="form-control" id="validationDefault02" defaultValue="Otto" required onChange={(e)=>onValueChange(e)} name='email'/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="validationDefault02" defaultValue="Otto" required onChange={(e)=>onValueChange(e)} name='phone'/>
  </div>
 
 
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=>addUserDetails()}>Submit form</button>
  </div>
</form>

    
    
    
    </>
  )
}

export default AddUser