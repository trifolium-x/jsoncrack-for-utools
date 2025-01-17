import React from "react";
import toast from "react-hot-toast";
import { Button } from "src/components/Button";
import { Modal, ModalProps } from "src/components/Modal";
import useConfig from "src/store/useConfig";

export const ClearModal: React.FC<ModalProps> = ({ visible, setVisible }) => {
  const setJson = useConfig(state => state.setJson);

  const handleClear = () => {
    setJson("{}");
    toast.success(`Cleared JSON and removed from memory.`);
    setVisible(false);
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <Modal.Header>清除JSON</Modal.Header>
      <Modal.Content>你确定要清除JSON吗?</Modal.Content>
      <Modal.Controls setVisible={setVisible}>
        <Button status="DANGER" onClick={handleClear}>
          确认
        </Button>
      </Modal.Controls>
    </Modal>
  );
};
