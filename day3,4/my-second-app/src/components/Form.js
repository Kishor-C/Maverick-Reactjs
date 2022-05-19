import { Component } from 'react';
export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {username : '', password : ''}
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        // once the state is updated send the form data to the server
        console.log('send the data to the backend server: '+this.state)
    }
    render() {
        return (<div className = 'container-fluid'>
            <h3>Login Form</h3>
            <div className = 'form-group'>
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'row'>
                        <div className = 'col-3'>
                            Username <input type = 'text' name = 'username' autoComplete='off' className = 'form-control'
                            onChange={(event) => this.setState({username: event.target.value})}></input>
                        </div>
                    </div>
                    <div className = 'row'>
                        
                        <div className = 'col-3'>
                        Password <input type = 'password' name = 'password' className = 'form-control'
                            onChange = {(event) => this.setState({password: event.target.value})}></input>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-3'>
                            <input type = 'submit' value = 'Login' className = 'btn btn-secondary'></input>
                        </div>
                        
                    </div>
                </form>
            </div>
            
            <div>Username: {this.state.username}, Password: {this.state.password}</div>
        </div>)
    }
}