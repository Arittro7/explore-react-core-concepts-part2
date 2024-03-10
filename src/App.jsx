import './App.css'

import Counter from './Counter';
import Team from './Team';
import Users from './assets/Users';
import Friends from './Friends';

function App() {
  
  // process 1
  function buttonClick1(){
    alert('Button gotta hit')
  }

  // process 2
  const buttonClick2 = () => {
    alert('button guta khaice');
  }

  // process 4
  const addToFive = (num) => {
    alert(num +5 );
  }

  return (
    <>
     <h3>React Core Concepts 2</h3>

     <Friends></Friends>

     <Users></Users>

     <Team></Team>
     
     <Counter></Counter>
     <button onClick={buttonClick1}>One</button>
     <button onClick={buttonClick2}>Two</button>

     {/* process 3 */}
     <button onClick={() => {alert('third got clicked')}} >Third</button>
     {/* <button onClick={addToFive(3)}>Four</button> */}

    </>
  )
}

export default App
        