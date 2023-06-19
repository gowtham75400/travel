import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img
        src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701338358.jpg'
        alt='/'
        className='w-full h-full object-cover'/>
        
        <div  className='max-w-[1140px] m-auto text-opacity-10'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl '>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With WeekAway</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima magni aliquam, repellat aspernatur dolores sit voluptas hic, autem qui libero quae dolorum aut ut, optio nulla inventore doloribus blanditiis!
                </p>
            </div>
        </div>


    </div>
  )
}

export default Hero