import { ReactNode, createContext } from 'react';
import ModalController from '../components/modalControler';
import useModal from '../hook/useModal';

export enum ModalType {
  "helloModal",
  "byeModal",
}

export interface modalStore {
  id: number;
  type: ModalType | null;
  data?: unknown;
}
interface contextModalInterface{
  modalList: modalStore[],
  openModal: (type: modalStore) => void
  closeModal: (id: number) => void
}

export const ModalContext = createContext<contextModalInterface>({
	modalList: [],
	openModal: () => {},
	closeModal: () => {},
});

export const ModalProvider = ({children}: {children: ReactNode})=> {
  const {modalList, openModal, closeModal} = useModal()

  return (
    <ModalContext.Provider value={{modalList, openModal, closeModal}}>
      <ModalController/>
      {children}
    </ModalContext.Provider>

  )
}