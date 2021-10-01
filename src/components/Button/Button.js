import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.method}
        style={{ backgroundColor: this.props.color }}
        className="Default-button"
        disabled={this.props.disabled}
        selected={this.props.selected}
      >
        {this.props.text}
        {this.props.image}
      </button>
    );
  }
}

export default Button;
