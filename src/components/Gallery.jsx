import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1200px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-col-5 gap-4'>
                <div className='sm:col-span-5 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover'
                    src='https://c4.wallpaperflare.com/wallpaper/301/112/833/exotic-places-beautiful-beaches-coast-rocks-trees-blue-ocean-transparent-water-white-with-white-clouds-computer-summer-wallpapers-hd-2560%C3%971440-wallpaper-preview.jpg' alt='/'/>
                </div>
                
                <div>
                    <img className='w-full h-full object-cover'
                    
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqLjuqY416CmnhBdsRtqvbyBj1vJoy2fQUQ&usqp=CAU' alt='/'/>
                </div>
                
                <div>
                    <img className='W-full h-full object-cover'
                    src='https://oceansurfari.com/wp-content/uploads/bb-plugin/cache/cruise-ship-experiencing-sunset-custom_crop.jpg' alt='/'/>
                </div>
                
                <div>
                    <img className='W-full h-full object-cover'
                    src='https://media.istockphoto.com/id/1160947136/photo/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island.jpg?s=612x612&w=0&k=20&c=WJWEH22TFinjI0edzblfH-Nw0cdBfPX5LV8EMvs8Quo=' alt='/'/>
                </div>
                
                <div>
                    <img className='W-full h-full object-cover'
                    src='https://www.hdwallpapers.in/thumbs/2020/resort_with_pool_and_hut_near_beach_4k_hd_nature-t2.jpg' alt='/'/>
                
                </div>
            </div>
    </div>
  )
}

export default Gallery