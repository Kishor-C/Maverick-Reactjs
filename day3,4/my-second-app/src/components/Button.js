import { Component } from 'react';

export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }
    handleClick = () => {
        let temp = this.state.counter;
        temp++;
        this.setState({counter: temp});
    }
    render() {
       return (<div>
        <button onClick = {this.handleClick}>My Button</button>
        <div>Counter: {this.state.counter}</div>
       </div>) 
    }
}