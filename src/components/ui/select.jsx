import styled from "@emotion/styled";
import { colors } from "../../styles";
import { Component } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

export const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export const selectOptions = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "legal", label: "Legal" },
  { value: "education", label: "Education" },
  { value: "government", label: "Government" },
  { value: "sales", label: "Sales" },
];

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    });
  };

  render() {
    return (
      <ReactSelect
        options={selectOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={this.handleChange}
        allowSelectAll={true}
        value={this.state.optionSelected}
      />
    );
  }
}
