import Modal from "react-modal";
import { Button } from "../Button/Button";
import { DeleteModalProps } from "./types";

const DeleteModal = ({
  isOpen,
  onRequestClose,
  confirmDelete,
}: DeleteModalProps) => {
  return (
    <Modal
      className=" border-2 h-64 w-1/3 bg-white mx-auto p-16 pt-24 mt-72 rounded-md"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2 className="mb-1  font-bold text-xl ">
        Are you sure you want to delete this item?
      </h2>
      <Button onClick={confirmDelete} className=" ml-20 bg-red-300 mt-4 mr-12">
        Yes
      </Button>
      <Button onClick={onRequestClose} className=" bg-red-300 mt-4 ">
        No
      </Button>
    </Modal>
  );
};

export default DeleteModal;
