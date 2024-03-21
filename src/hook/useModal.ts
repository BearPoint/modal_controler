import { useState } from 'react';
import { modalStore } from '../providers/modalProvider';

export default function useModal(){
  const [modalList, setModalList]= useState<modalStore[]>([])

  const openModal = (newModal: modalStore)=> {
    setModalList(old=> [...old, newModal])
  }
  
  const closeModal =(id: number)=> {
    setModalList(old=> old.filter(modal=> modal.id != id))
  }
  return {modalList, openModal, closeModal}
}