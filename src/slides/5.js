import React from "react";
import { Heading, Slide } from "spectacle";

export default class Slide5 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="primary">
        <Heading size={5} textColor="secondary">
          JamStack
        </Heading>
        <iframe
          title="JamStack"
          src="https://jamstack.org/"
          style={{ width: 1300, height: 600, marginLeft: -150 }}
        />
      </Slide>
    );
  }
}
