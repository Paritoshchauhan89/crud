import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { editUser, getUser } from '../service/api';
  
const EditUser = () => {

const defaultValue ={
  name:'',
  username:'',
  email :'',
  phone:''
}


const [user,setUser] =useState(defaultValue);
// const navigate = useNavigate();
const {id} = useParams(); 
 

 
useEffect(() =>{
loadUserDetails();

},[])

const loadUserDetails = async() =>{
    const response = await getUser(id);
    setUser(response.data);
}

  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }


  const editUserDetails = async() => {
    await editUser(user,id);
    // navigate('/all');
}
  return (
    <>
    <h4 className='text-center mt-5'>Update Details</h4>
   <form className="row g-3 m-5">
  <div className="col-md-3">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01"  required onChange={(e)=>onValueChange(e)} name='name' Value={user.name}/>
  </div>

  <div className="col-md-3">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault02" className="form-label">Email</label>
    <input type="email" className="form-control" id="validationDefault02"  required onChange={(e)=>onValueChange(e)} name='email' Value={user.email}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="validationDefault02"  required onChange={(e)=>onValueChange(e)} name='phone' Value={user.phone}/>
  </div>
 
 
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=>editUserDetails()}>Update form</button>
  </div>
</form>

    
    
    
    </>
  )
}

export default EditUser