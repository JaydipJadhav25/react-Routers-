import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const{id} = useParams();
    // const[data , setdata] = useState("welcome");
    // let num =useCallback(() =>{
    //     prompt("enter a password : ");
    // },[{id}])
    //    num = prompt("enter a password : ");
     let num  = id; 
    let color = "white";
     let data ="welcome:"
    if(num == 200){
     data ="you are admin "
     color = "red"
     let  pass = prompt("enter a password : ");

    }
    else{
        data= "you are user "
     color = "green"   

    }
  return (
    <div className='box ' style={{backgroundColor: color}}>
    
        <h1> user :{id}</h1>
        
        <p>    || {data}      </p>

    </div>
  )
}
