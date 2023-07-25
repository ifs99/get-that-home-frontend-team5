import Popover from "../ui/Popover/Popover";
import Button from "../ui/button";
import styled from "@emotion/styled";
import { typography } from "../../styles";
import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Houses", "Apartments"];
const defaultCheckedList = [];

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const CheckboxLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm}
`;
function PropertyFilter() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const filterContent = (
    <div>
      <RadioContainer>
        <CheckboxLabel>PROPERTY TYPE</CheckboxLabel>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </RadioContainer>
      <Button type="primary"> DONE</Button>
    </div>
  );
  return (
    <Popover content={filterContent}>
      <Button type="primary">PROPERTY</Button>
    </Popover>
  );
}

export default PropertyFilter;
