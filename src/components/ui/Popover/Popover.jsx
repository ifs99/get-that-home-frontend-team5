import styled from "@emotion/styled";
import { Popover as AntPopover } from "antd";

const CustomPopover = styled(AntPopover)``;

function Popover({ content, children }) {
  return (
    <CustomPopover placement="bottom" content={content} trigger="click">
      {children}
    </CustomPopover>
  );
}

export default Popover;
