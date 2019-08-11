import React from "react";
import { Heading, Slide } from "spectacle";

export default class Slide6 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={5} textColor="primary">
          Preact <a href='https://proxx.app/' style={{float: 'right', fontSize: 22}}>Show demo</a>
        </Heading>
        <iframe src="https://preactjs.com/" style={{ width: 1300, height: 600, marginLeft: -150}}></iframe>
      </Slide>
    );
  }
}
