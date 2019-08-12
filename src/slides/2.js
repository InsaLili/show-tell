import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default class Slide2 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} caps textColor="secondary">
          Show & Tell
        </Heading>
        <List margin="60px 0 0">
          <ListItem>Packages & libraries</ListItem>
          <ListItem margin="30px 0 0">Tips & tricks</ListItem>
          <ListItem margin="30px 0 0">Social & trending topic</ListItem>
        </List>
      </Slide>
    );
  }
}
