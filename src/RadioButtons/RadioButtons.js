import { Component } from 'react';
import './RadioButtons.css';
import Button from 'components/Button/Button';

class RadioButtons extends Component {


  render() {

    return(
      // I'm not able to figure out how to pass down props through methods
      // Here, I want to make it so clicking the button will change a prop
      // (for example, color or selected) but its unclear how I can access 
      // props from a method here, in the parent function
    <>
    
      <Button text="cheese" /*method={() = > this.props.color = "blue"}*/ />
      <Button text="tomato" /*method={() => !this.props.selected}*/ />
      <Button text="pinapple"/>
      <Button text="pepperoni"/>
    </>
    );
  }
}

export default RadioButtons;
