import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const nayoks=['radzak','hadfdf','jasim','marof']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Counter></Counter>
        <UserLoad></UserLoad>
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function UserLoad(){
  const [users, setUser]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>dfdf</h1>
     <ul>
       {
          users.map(user=><li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(0);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}>Incrise</button>
      <button onClick={()=> setCount(count-1)}>Discries</button>
    </div>
  )
}

function Person(Porps){

  const Personstyle={
    color: 'red',
    border: '2px solid red',
  }
  return (
    <div style={Personstyle}>
       <h1>name:{Porps.name}</h1>
       <h1>name:{Porps.name}</h1>
    </div>
 
  )
}

export default App;
