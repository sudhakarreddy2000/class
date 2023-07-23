// import {useState,useEffect } from "react";
// function App() {
// const [data,setData]=useState()
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       // .then(json => console.log(json))
//       .then(json => setData(json))
//   })
// 	return (
// 		<>
// <h1>react</h1>
// {data.map((list)=><li>{list.title}</li>)}
// </>
// 	);
// }
// export default App;
import {useEffect, useState} from 'react'

function App(){
  const [data,setData]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos').then(
    response=>response.json()
    ).then(json=>setData(json))
},[])
  return(
    <>
    <h1>Hello</h1>
    {data.map((list)=><li>{list.title}</li>)}
</>
  )
}
export default App