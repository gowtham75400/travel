import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <MdOutlineTravelExplore size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700 '>N.K Travel</h1>
        </div>
    </div>
  )
}

export default Footer