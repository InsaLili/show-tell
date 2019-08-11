import React from "react";
import { Text, Slide, List, ListItem, GoToAction } from "spectacle";

export default class Slide31 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary">
        <Text size={5} textColor="primary">
          Spectacle
        </Text>
        <iframe src="https://formidable.com/open-source/spectacle/" style={{width: 1300, height: 600, marginLeft: -150}}></iframe>
      </Slide>
    );
  }
}
