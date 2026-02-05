import './App.css'
import { GoNumber } from "react-icons/go";
import { CiCalculator1 } from "react-icons/ci";
import { PiMathOperations } from "react-icons/pi";


function App() {

  return (
    <div className="App">
      <h1><CiCalculator1 size={36} /> Calculatrice</h1>
      <form action="https://localhost:5000/calculate" className="form" method="get">
      <div>
        <PiMathOperations size={24} color="#333" />
        <select name="option">
          <option value="addition">+ (addition)</option>
          <option value="soustraction">- (soustraction)</option>
          <option value="multiplication">x (multiplication)</option>
          <option value="division">/ (division)</option>
        </select>
      </div>
      <div>
        <GoNumber size={24} color="#333" />
        <input type="number" name="number1" placeholder="Number 1" />
      </div>
      <div>
        <GoNumber size={24} color="#333" />
        <input type="number" name="number2" placeholder="Number 2" />
      </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  )
}

export default App
