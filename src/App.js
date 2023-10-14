import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import Sidepage from './Components/Sidepage';
import Chart from 'chart.js/auto';
function App() {
  return (
    <div className="App">      
      <Sidepage/>
      <Mainpage/>
    </div>
  );
}

export default App;
