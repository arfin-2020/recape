import React,{useEffect, useState} from 'react';
import './App.css';
function App() {
  const nayoks = [{name:"sakib",age:"23"},{name:"KingKhan", age:"24"},{name:"Manna",age:"45"},{name:"KingKhan", age:"203"}];
  const products = [{name:"laptop",price:"45000"},{name:"LCD",price:"20000"},{name:"WashingMachine",price:"35000"}];
  const friends = [{name:"Arfin",age:"34"},{name:"Arif",age:"32"},{name:"katrina",age:"34"}];
  const users = ['Arfin','rahim',"jashim"];
  
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {/* <Users name = {user[0]}></Users>
        <Users name = {user[1]}></Users>
        <Users name = {user[3]}></Users>
        <Users name = {user[4]}></Users> */}
        {
          users.map(user=><Users name = {user} ></Users>)
        }
       {/* <Students></Students>
       <Students></Students>
       <Students></Students> */}
        {/* <Students name = {nayoks[0]} age = "40"></Students>
        <Students name = {nayoks[1]}></Students>
        <Students name = {nayoks[2]}></Students> */}
        {
          nayoks.map(nayok => <Nayok name = {nayok.name} age = {nayok.age}></Nayok>)
        }
        {/* <Products name = {products[0].name} price = {products[0].price}></Products>
        <Products name = {products[1].name} price = {products[1].price}></Products>
        <Products name = {products[2].name} price = {products[2].price}></Products> */}
        {
          products.map(pro=><Products name = {pro.name} price = {pro.price}></Products>)
        }
        {/* <Friends name = {friends[0].name} age = {friends[0].age}></Friends>
        <Friends name = {friends[1].name} age = {friends[1].age}></Friends>
        <Friends name = {friends[2].name} age = {friends[2].age}></Friends> */}
        {
          friends.map(friend=><Friends name = {friend.name} age = {friend.age}></Friends>)
        }
        <Api></Api>
      </header>
    </div>
  );
}
//How to data load again
function Api(){
  const [apis,setApis] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setApis(data))
  },[])
  return (
    <div>
    {
      console.log(apis)
    }
      <h2> Dynamic Users: {apis.length} </h2>
      {
        apis.map(api => <li>{api.title} id: {api.id}</li>)
      }
    </div>
  )
}

//how to load data
function Users(props){
const [users,setUsers]  = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic User: {users.length}</h1>
      {/* {
        console.log(users)
      } */}
      <h2>Users : {props.name}</h2>
      {
        users.map(user =><li>{user.name}</li>)
      }
      
    </div>
  )
}
// it's a same look same data
// function Students (){
//   return (
//     <div style = {{backgroundColor:"white",color:"black", padding: "20px 10px", border:"2px solid purple",borderRadius:"10px", marginBottom:"20px"}}>
//     <h5>Hi I am learnig how to make a components of react.</h5>
//     <p>Life is not a bed of roses.</p>
//     </div>
//   )
// }

// it's a same look and different data
function Nayok (props){
  // console.log(props.name);
  return (
    <div style = {{backgroundColor:"white",color:"black", padding: "20px 10px", border:"2px solid purple",borderRadius:"10px", marginBottom:"20px"}}>
    <h5>my name is: {props.name}</h5>
    <p>My old is : {props.age||30} </p>
    <h1>hello</h1>
    </div>
  )
}
//how to data dynamic 
function MovieCounter(){
  //it's a one way to convert data dynamic
// const [count,setCount] = useState(5);
//   const increaseHandler = ()=>{
//     const newCount = count + 1;
//     setCount(newCount);
//   }
//   const decreaseHandler = () =>{
//   if(count>0){
//       const newCount = count - 1;
//       setCount(newCount);
//     }
//   }


 const [count,setCount] = useState(5);
//  console.log(count);
//  console.log(setCount);
const handleClick = () => setCount(count + 1)
const decreasehandleClick = () => {if(count>0) {setCount(count - 1)}}
  return (
    <div>
      <h3> No of Movie: {count} </h3>
      <button onClick = {handleClick}>increase</button>
      <button onClick = {decreasehandleClick}>decrease</button>
      <MovieDisplay moviesCount = {count}></MovieDisplay>
      <MovieDisplay moviesCount = {count+5}></MovieDisplay>
      <MovieDisplay moviesCount = {count+10}></MovieDisplay>
      <MovieDisplay moviesCount = {count+20}></MovieDisplay>
      <MovieDisplay moviesCount = {count+30}></MovieDisplay>
      <MovieDisplay moviesCount = {count+40}></MovieDisplay>
      {/* <button onClick = {increaseHandler}>increase</button>
      <button onClick = {decreaseHandler}>decrease</button> */}
    </div>
  )
}
function MovieDisplay(props){
  // console.log(props);
  return (
    <div>
    <h3>Movie I have acted:{props.moviesCount} </h3>
    </div>
  )
 
}
function Friends(props2){
  return (
    <div>
      <h1>My Name is : {props2.name} & My age is : {props2.age} </h1>
    </div>
  )
}
function Products(props1){
  // console.log(props1);
  return (
    <div>
      <h1>Product Name : {props1.name} price: {props1.price}</h1>
    </div>
  )
}
export default App;
