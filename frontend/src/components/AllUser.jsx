import React from 'react'
import {getUsers, deleteUser} from '../service/api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const AllUser = () => {


  const [users, setUsers] = useState([]);

useEffect(()=>{
getAllUsers();
},[]);

const getAllUsers = async()=>{
 let response =  await getUsers();
 setUsers(response.data);
}

const deleteUserDetails=async(id)=>{
  await deleteUser(id);
  // getAllUsers();
}

  return (
    <>
    <table className="table" >
  <thead>
    <tr>
      <th scope="col">#Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Update</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
 {
  users.map(user =>(
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <img src={'data:image/jpeg;base64,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'} width={100} alt="user" />
      </td>
      <td>
<Link to={`/edit/${user._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
      </td>
      <td>
      <button className='btn btn-danger mx-2' style={{marginLeft:5}} onClick={()=>deleteUserDetails(user._id)}>Delete</button>

      </td>

    </tr>
  ))
 }
  </tbody>
</table>
    
    
    </>
  )
}

export default AllUser