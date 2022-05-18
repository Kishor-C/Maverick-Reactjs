import { Component } from 'react';

export class Button extends Component {
   
    handleClick = () => {
        console.log('handle click called');
    }
    render() {
       return (<div>
        Button: <button onClick = {this.handleClick}>My Button</button>
       </div>) 
    }
}