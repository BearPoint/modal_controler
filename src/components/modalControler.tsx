import { useContext } from 'react';
import { ModalContext, ModalType, modalStore } from '../providers/modalProvider';
import HelloModal from './helloModal';
import ByeModal from './byeModal';






export default function ModalController(){
  const {modalList} = useContext(ModalContext)
  return (<>
    {modalList.map(({type, data,id}: modalStore)=>(
      type === ModalType.helloModal ? <HelloModal data={data as string} key={id} id={id}/> :
      type === ModalType.byeModal ?  <ByeModal key={id} id={id}/> : 
      null
    ))}
  </>)
}