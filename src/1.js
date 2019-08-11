import React from "react";
import { Heading, Slide, Image } from "spectacle";
const images = {
  ijs: require("./assets/ijs.jpeg")
};
export default class Slide1 extends React.Component {
  render() {
    return (
      <Slide transition={["slide"]} bgColor="secondary">
        <Image src={images.ijs} />
        <Heading size={5} margin="20px 0 0" caps textColor="primary">
          May 13 & 14, 2019 | London
        </Heading>
      </Slide>
    );
  }
}
