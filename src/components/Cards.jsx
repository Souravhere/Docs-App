import React from 'react';
import { LuFileSignature } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, referamce }) {
  return (
    <motion.div drag dragConstraints={referamce} whileDrag={{scale:1.2}} className='w-52 relative flex-shrink-0 h-56 bg-zinc-700/90 rounded-[20px] p-3'>
      <LuFileSignature className='text-2xl text-white' />
      <p className='font-semibold leading-tight mt-3 text-gray-300'>{data.title}</p>
      <p className='text-xs leading-tight mt-2 text-gray-400'>{data.description}</p>
      <div className='flex items-center justify-between mt-4 text-gray-400'>
        <h5 className='text-lg font-semibold'>{data.filesize}</h5>
        <span>
          {data.closedownload ? <IoMdCloseCircle className='text-2xl hover:cursor-pointer' /> : <MdOutlineSimCardDownload className='text-2xl hover:cursor-pointer' />}
        </span>
      </div>
      {
        data.tag.isOpen  && (
        <div className={`bg-${data.tag.tagColor}-200 absolute h-8 bottom-0 left-0 rounded-b-[20px] w-full flex items-center justify-center hover:cursor-pointer hover:bg-${data.tag.tagColor}-100 duration-500`}>
          <h3 className='text-center font-semibold'>{data.tag.tagtitle}</h3>
        </div>
        )
      }
    </motion.div>
  );
}

export default Cards;
