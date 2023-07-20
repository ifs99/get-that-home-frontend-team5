import styled from "@emotion/styled";
import { Modal as AntModal } from "antd";

const CustomModal = styled(AntModal)`
  .ant-modal-title {
    color: #000;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
  }

  .ant-modal-close {
    display: none;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: center;
  }
`;

function Modal({ title, open, onOk, footer, children }) {
  return (
    <CustomModal title={title} open={open} onOk={onOk} footer={footer}>
      {children}
    </CustomModal>
  );
}

export default Modal;
