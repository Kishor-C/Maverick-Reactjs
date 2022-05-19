import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { FetchAllUsers, StoreUser } from './components/UserCrud';
import { Link, Route, Routes } from 'react-router-dom';
function MainLink() {
  return (<div>
    <Link to = '/store'>Create User</Link> /
    <Link to = '/fetchAll'>Display All Users</Link> /
    <Link to = '/login'>Login Form</Link>
  </div>)
}
function App() {
  return (<div className = 'container-fluid'>
    <h1 className = 'text-center'>This is Root component</h1>
    <div className = 'row'>
      <div className = 'col'>
        <MainLink />
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col'>
        <Routes>
          <Route path = '/' element = {<StoreUser />} />
          <Route path = '/fetchAll' element = {<FetchAllUsers />} />
          <Route path = '/store' element = {<StoreUser />} />
          <Route path = '/login' element = {<Form />} />
         </Routes>
      </div>
    </div>
  </div>)
}
export default App;
