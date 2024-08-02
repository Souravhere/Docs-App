import React from 'react';
import { LuFileSignature } from "react-icons/lu";

function Cards() {
  return (
    <div className='w-52 relative h-64 bg-zinc-700/90 rounded-[20px] p-3'>
      <LuFileSignature className='text-2xl text-white' />
      <p className='font-semibold leading-tight mt-3 text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <p className='text-xs leading-tight mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quas ab iusto itaque harum tempora!</p>
      <div className='bg-blue-200 absolute h-8 bottom-0 left-0 rounded-b-[20px] w-full'>
      </div>
    </div>
  )
}

export default Cards
