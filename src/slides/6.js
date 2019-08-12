import React from "react";
import { Heading, Slide, Text } from "spectacle";
import { Switch } from "@bdo/kitchensink";

export default class Slide6 extends React.Component {
  constructor() {
    super();
    this.state = { demo: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle(value) {
    this.setState({ demo: value });
  }

  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={5} textColor="primary">
          Preact
        </Heading>
        <Text textColor="primary">Show demo: <Switch checked={this.state.demo} onChange={this.toggle} checkedChildren="On" unCheckedChildren="Off"/>   </Text>     
        {this.state.demo ? (
          <iframe
            title="proxx"
            src="https://proxx.app/"
            style={{ width: 1300, height: 600, marginLeft: -150 }}
          />
        ) : (
          <iframe
            title="preact"
            src="https://preactjs.com/"
            style={{ width: 1300, height: 600, marginLeft: -150 }}
          />
        )}
      </Slide>
    );
  }
}
