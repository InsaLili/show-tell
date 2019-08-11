import React from "react";
import { Heading, Slide } from "spectacle";

export default class Slide7 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={5} textColor="primary">
          Formik
        </Heading>
        <iframe src="https://github.com/jaredpalmer/formik" style={{ width: 1300, height: 600, marginLeft: -150}}></iframe>
      </Slide>
    );
  }
}
