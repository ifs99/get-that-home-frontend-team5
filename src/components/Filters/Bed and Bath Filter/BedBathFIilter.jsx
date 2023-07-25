import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { Radio } from "antd";
import { typography } from "../../../styles";

const RadioGroupContainer = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const RadioLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm};
  letter-spacing: 0.09375rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;
const options1 = [
  {
    label: "Any",
    value: "Any",
  },
  {
    label: "1+",
    value: "1+",
  },
  {
    label: "2+",
    value: "2+",
  },
  {
    label: "3+",
    value: "3+",
  },
  {
    label: "4+",
    value: "4+",
  },
];

const options3 = [
  {
    label: "Any",
    value: "Any",
  },
  {
    label: "1+",
    value: "1+",
  },
  {
    label: "2+",
    value: "2+",
  },
  {
    label: "3+",
    value: "3+",
  },
  {
    label: "4+",
    value: "4+",
  },
];

function BedBathFilter() {
  const [value1, setValue1] = useState("Any");
  const [value3, setValue3] = useState("Any");

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const onChange3 = ({ target: { value } }) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  const filterContent = (
    <div>
      <RadioGroupContainer>
        <div>
          <RadioLabel>BEDS</RadioLabel>
          <Radio.Group
            label="Bedrooms"
            options={options3}
            onChange={onChange3}
            value={value3}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div>
          <RadioLabel>BATHS</RadioLabel>
          <Radio.Group
            options={options1}
            onChange={onChange1}
            value={value1}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <ButtonContainer>
          <Button type="primary"> DONE</Button>
        </ButtonContainer>
      </RadioGroupContainer>
    </div>
  );
  return (
    <Popover content={filterContent}>
      <Button type="primary">BEDS & BATH</Button>
    </Popover>
  );
}
export default BedBathFilter;

// function PropertyFilter() {
//   const filterContent = (
//     <div>
//       <h3>PROPERTY TYPE</h3>
//       <form>
//         <RadioContainer>
//           <input type="radio" name="Property" />
//           <p>Houses</p>
//         </RadioContainer>
//         <RadioContainer>
//           <input type="radio" name="Property" />
//           <p>Apartments</p>
//         </RadioContainer>
//       </form>
//       <Button type="primary"> DONE</Button>
//     </div>
//   );

//   return (
//     <Popover content={filterContent}>
//       <Button type="primary">PROPERTY</Button>
//     </Popover>
//   );
// }
