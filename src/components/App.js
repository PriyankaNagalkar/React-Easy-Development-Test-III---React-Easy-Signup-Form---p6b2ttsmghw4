// import '../styles/App.css';

import React from 'react'

const App = () => {
  
  return (
    <div>
      <form>
        name: <input type="text" id='name'></input><br></br>
        email: <input type="text" id="email"></input><br></br>
        password: <input type="password" id='password'></input><br></br>
        <input type="checkbox" id="consent"></input><br></br>
       <button>Signup</button>
      </form>
    </div>
  )
}


export default App;
