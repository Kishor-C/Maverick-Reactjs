import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  // earlier we created the state, but now we have subscribed to the store having state
  // useSelector() is a Redux hook, reads value from the store & subscribes to update
  const counter = useSelector((state) => state.counter);
  // useDispatch() is Redux hook, this dispatches the action to the reducer based on the 
  // action the reducer is going to return the state
  // dispatch({type : 'incr'}) or dispatch({type : 'decr'})
  const dispatch = useDispatch(); 
  return (<div className = 'text-center'>
    <h2>React Redux Demo!</h2>
    
    <button onClick = {()=>dispatch({type: 'decr'})}>-</button>
    Counter: {counter}
    <button onClick = {()=>dispatch({type: 'incr'})}>+</button>
  </div>)
}

export default App;
