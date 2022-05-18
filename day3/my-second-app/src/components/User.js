import {Component} from 'react';

export class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h3>Hello {this.props.username} !</h3>
        </div>)
    }
}