import React from 'react';

const Section = () => {
    return (
        <div>
             <div className='mt-10'>
            <div className=' flex max-w-5xl mx-3 lg:mx-auto '>
            <div>
                <img src="banner.jpg" className=' w-[55rem] rounded-3xl' alt="" />
            </div>
            <div className=' flex flex-col gap-5 ml-5'>
                <img src="banner2.jpg" className=' rounded-3xl w-[28rem] ' alt="" />
                <img className=' rounded-3xl w-[28rem]' src="banner3.jpg" alt="" />
            </div>
        </div>
        <div className=' mt-8 w-[25rem] lg:w-[72rem] my-10  mx-auto'>
            <p className=' text-md lg:text-xl text-center font-semibold'>Embark on a journey of collaborative learning with your friends! Join our online group study platform to create, complete, and grade assignments together, fostering academic excellence and camaraderie every step of the way.</p>
        </div>
        </div>
        </div>
    );
};

export default Section; 