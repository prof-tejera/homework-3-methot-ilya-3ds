import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        onInput={(e) => this.props.setState(e.target.value)}
        type= {this.props.type}
        placeholder={this.props.placeholder}
        style={{backgroundColor:this.props.color}}
        className="input"
      ></input>
    );
  }
}

export default Input;
