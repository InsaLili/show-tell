import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default class Slide2 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="primary">
        <Heading size={5} textColor="secondary">
          Packages & libraries
        </Heading>
        <List margin="60px 0 0">
          <ListItem>GraphQL</ListItem>
          <ListItem>
            <a href="https://formidable.com/open-source/spectacle/">
              Spectacle
            </a>
          </ListItem>
          <ListItem>Formik or React-Final-Form</ListItem>
          <ListItem>MobX</ListItem>
          <ListItem>React-starter-kit</ListItem>
          <ListItem>
            <a href="https://jamstack.org/">JamStack</a>
          </ListItem>
          <ListItem>
            <a href="https://preactjs.com/guide/v10/getting-started">Preact, a fast 3kB alternative to React </a>.
            Demo: <a href="https://proxx.app/">Proxx.app</a>
          </ListItem>
        </List>
      </Slide>
    );
  }
}
