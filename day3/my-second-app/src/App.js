import logo from './logo.svg';
import './App.css';
import {User} from './components/User';
import { Button } from './components/Button';
import { Form } from './components/Form';

function App() {
  
  return (<div className = 'container-fluid'>
    <h1>This is Root component</h1>
    <Form />
  </div>)
}
export default App;
