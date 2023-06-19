import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'

const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <MdOutlineTravelExplore size={30} className="text-[var(--primary-dark)] mr-2" />
                <h1 className="text-xl font-bold text-gray-700">N.K Travel</h1>
            </div>

            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                    <p className="hidden md:flex items-center px-6">9am-5am</p>
                </div>

                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className="text-sm text-gray-700">892389283</p>
                </div>

                <button>Get a Free Quote</button>
            </div>
        </div>
    );

};

export default TopBar;