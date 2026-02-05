import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <form action="https://localhost:5000/calculate" className="App" method="get">
      <select name="option">
        <option value="addition">+ (addition)</option>
        <option value="soustraction">- (soustraction)</option>
        <option value="multiplication">x (multiplication)</option>
        <option value="division">/ (division)</option>
      </select>
        <input type="number" name="number1" placeholder="Number 1" />
        <input type="number" name="number2" placeholder="Number 2" />
        <button type="submit">Valider</button>
      </form>
    </div>
  )
}

export default App
