import { Component } from "react";
import "./Pager.css";
import Button from "components/Button/Button";
import loginForm from "../images/login_form.png";
import pagination from "../images/pagination.png";
import radio_buttons from "../images/radio_buttons.png";

class Pager extends Component {
  
  // Facing problems when attempting to make the methods cause the component to re-render.
  // Currently, the methods are triggering when I attempt to bind them  in the render down below
  // This causes an update loop.

  incrementCurrentImage = (currentImage, Images) => {
    if (currentImage++ > Images.length) {
      return null;
    } else {
      currentImage++;
      // this.forceUpdate()
    }
  };

  decreaseCurrentImage = (currentImage) => {
    if (currentImage-- < 0) {
      return null;
    } else {
      currentImage = currentImage--;
      // this.forceUpdate()
    }
  };

  setCurrentImage = (currentImage, index) => {
    currentImage = index;
    // this.forceUpdate()
  };

  render() {   
  
    const Images = ["1", "2", "3", "4", "5", "6", "7"];

  let currentImage = 3;

    return (
      <>
        {currentImage !== 0 && <Button text="<" method={this.decreaseCurrentImage(Images, currentImage)} />}
        {Images.map((image, index, i) => {
          if (index === 0 && currentImage - 0 > 2) {
            return (
              <>
                <Button method={this.setCurrentImage(Images, currentImage, index)} text={0} key={i} />
                <Button disabled="true" text={"..."} key={i} />
              </>
            );
          }
          if (
            index === Images.length - 1 &&
            currentImage - Images.length - 1 < -2
          ) {
            return (
              <>
                <Button disabled="true" text={"..."} key={i} />
                <Button
                  method={this.setCurrentImage(Images, currentImage, index)}
                  text={Images.length}
                  key={i}
                />
              </>
            );
          }
          if (currentImage - index <= 2 && currentImage - index >= -2) {
            if (index === currentImage) {
              return (
                <Button
                  disabled="true"
                  text={index}
                  key={i}
                  color="lightblue"
                />
              );
            } else {
              return (
                <Button method={this.setCurrentImage(Images, currentImage, index)} text={index} key={i} />
              );
            }
          }
        })}
        {currentImage !== Images.length && (
          <Button text=">" method={this.incrementCurrentImage(Images, currentImage)} />
        )}
      </>
    );
  }
}

export default Pager;
