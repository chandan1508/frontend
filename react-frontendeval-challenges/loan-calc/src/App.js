import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="loan-calc">
      <h1>Mortgage calculator</h1>

      <div className='inputs'>
        <p>Principle:</p>
        <input type='number' id='principle'></input>

        <p>Interest:</p>
        <input type='number' id='interest'></input>

        <p>Years:</p>
        <input type='number' id='years'></input>
      </div>

      <div className='output'>
        Your EMI is 2000
      </div>
    </div>
  );
}

export default App;
