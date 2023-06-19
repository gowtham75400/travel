import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16 font-bold'>
        <h2 className='text-center text-gray-700 '>Send us a Message</h2>
        <p className='text-center text-gray-700 py-3'>We're Standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img
            src='https://img.freepik.com/premium-photo/aerial-drone-top-view-crowd-happy-people-relax-tropical-beach-with-sunset-phuket-thailand-beautiful-phuket-beach-is-famous-tourist-destination-andaman-sea-holiday-summer-concept_265993-528.jpg' alt='/'
            
            className='w-full m:h-full object-cover p-2 max-h-[500px] h-[200px]'/>

            <form>
                <div className='grid grid-col-2'>
                    <input className='border m-2 p-2' type='text' placeholder='First' />
                    <input className='border m-2 p-2' type='text' placeholder='Last' />
                    <input className='border m-2 p-2' type='email' placeholder='Email' />
                    <input className='border m-2 p-2' type='tel' placeholder='Phone' />
                    <input className='border m-2 p-2 col-span-2'type='text' placeholder='Address' />
                    <textarea className='border m-2 p-2 col-span-2'cols='30' rows='10'></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Contact;