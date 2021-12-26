
import Hello from './components/Hello';
import Clicker from './components/Clicker'
import Inputs from './components/Inputs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name='Sara' lname='World'/>
       <Clicker />
       <Inputs />
       
  </div>
  )
}

export default App;
