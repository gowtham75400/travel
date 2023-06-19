import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2x1 font-bold '>Resorts</h3>
                <img 
                    className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                    src='https://wallpaperaccess.com/full/902503.jpg' alt='/'/>
        </div>   
        
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2x1 font-bold'>Excursions</h3>
                <img 
                    className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                    src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='/'/>
            
        </div>   
        
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2x1 font-bold '>Cruises</h3>
                <img 
                    className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                    src='https://wallpapers.com/images/featured/48fv0tg5inbcobk9.jpg' alt='/'/>
           
        </div>   
    </div>
  )
}

export default Activities