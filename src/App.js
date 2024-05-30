import React, { useState } from 'react';
import './App.css';
import {useEffect} from 'react'
import UsersData from './component/UsersData'





const Api="https://jsonplaceholder.typicode.com/users";









const App=()=>{
  const [users,setUsers]=useState([]);
  
const fetchtodos=async()=>{
  const res= await fetch(Api);
  const data=await res.json();
  if(data.length>0){
    setUsers(data)
  }
  console.log(data)
}
  useEffect(()=>{

    fetchtodos(users);
  
  },[]
  )
  return <>
     <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
         
        </thead>
        <tbody>
            <UsersData user={users}/>
        </tbody>
     </table>
  </>
}

export default App;
