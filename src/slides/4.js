import React from "react";
import { Heading, Slide } from "spectacle";

export default class Slide4 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={5} textColor="primary">
          Spectacle - kitchensink demo
        </Heading>
        <div className="kitchensink-demo">
        </div>
      </Slide>
    );
  }
}

