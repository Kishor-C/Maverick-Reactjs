import logo from './logo.svg';
import './App.css';

function Greetings() {
  let username = 'Alexandar';
  return (<div>
    <h3>Hello {username}</h3>
  </div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is done in React tool kit</h2>
        <Greetings />
      </header>
    </div>
  );
}

export default App;
