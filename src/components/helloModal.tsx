import { useContext } from 'react'
import { ModalContext } from '../providers/modalProvider'

export default function HelloModal({data, id}: {data: string,id:number}) {
  const {closeModal} = useContext(ModalContext)
  return (
    <div className=" bg-slate-700/80 fixed z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <div
        className="w-4/5 relative bg-white rounded-lg h-4/5 p-5 grid grid-rows-[20px_1fr_50px]"
      >
        <div className="flex justify-between w-full items-center">
          <div className='text-black'>hi {data}</div>
          <button className="text-end cursor-pointer" onClick={()=> closeModal(id)}>
            close X
          </button>
        </div>
      </div>
    </div>
    
  )
}