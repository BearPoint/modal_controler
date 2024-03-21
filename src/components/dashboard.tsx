import { useContext } from "react";
import { ModalContext, ModalType } from "../providers/modalProvider";

export default function Dashboard() {
  const { openModal, modalList } = useContext(ModalContext);

  return (
    <>
      <button
        onClick={() =>
          openModal({
            id: modalList.length + 1,
            type: ModalType.helloModal,
            data: "francisco",
          })
        }
      >
        open Hello Modal
      </button>
      <button
        onClick={() =>
          openModal({
            id: (modalList?.length || 0) + 1,
            type: ModalType.byeModal,
            data: "francisco",
          })
        }
      >
        open Bye Modal
      </button>
    </>
  );
}
