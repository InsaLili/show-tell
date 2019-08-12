import React from "react";
import { Heading, Text, Slide } from "spectacle";
import { Checkbox, DatePicker, Switch } from "@bdo/kitchensink";

export default class Slide31 extends React.Component {
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
          Spectacle
        </Heading>
        <div className="subtitle-demo">
          Kitchensink demo:{" "}
          <Switch
            checked={this.state.demo}
            onChange={this.toggle}
            checkedChildren="On"
            unCheckedChildren="Off"
          />{" "}
        </div>
        {this.state.demo ? (
          <div className="kitchensink-demo">
            <KitchensinkDemo />
          </div>
        ) : (
          <iframe
            title="spectacle"
            src="https://formidable.com/open-source/spectacle/"
          />
        )}
      </Slide>
    );
  }
}

const KitchensinkDemo = () => (
  <div>
    Date picker: <DatePicker size="small" />
    <br />
    Checkbox: <CheckboxExample />
  </div>
);

const plainOptions = ['Cat', 'Dog', 'Rabbit'];
const defaultCheckedList = ['Cat', 'Rabbit'];

class CheckboxExample extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onCheckAllChange = this.onCheckAllChange.bind(this);
  }

  onChange(checkedList) {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange (e) {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <Checkbox.Group options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }
}
