import { Component } from 'react';

export class Form extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form is submitted');
    }
    handleInput = (event) => {
        console.log(event.target.value);
    }
    render() {
        return (<div className = 'container-fluid'>
            <form onSubmit = {this.handleSubmit}>
                <div>
                    Username <input type = 'text' name = 'un' autoComplete='off' onChange={this.handleInput}></input>
                </div>
                <div>
                    Password <input type = 'password' name = 'pw' onChange = {this.handleInput}></input>
                </div>
                <div>
                    <input type = 'submit' value = 'Login'></input>
                </div>
            </form>
        </div>)
    }
}