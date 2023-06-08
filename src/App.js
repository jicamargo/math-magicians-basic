import './App.css';
import Calculator from './components/Calculator';
import Dailyquote from './components/Dailyquote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Rocks!
      </header>
      <section className="components-section">
        <Calculator />
        <Dailyquote />
      </section>
    </div>
  );
}

export default App;
