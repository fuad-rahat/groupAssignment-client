import React from 'react';
import Section from './Section';
import Footer from '../Shared/Footer';
import Acordian from '../Shared/Acordian';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <div className=" overflow-hidden">

  <div></div>
       <div className=" mx-4 mb-4  rounded-xl flex flex-col-reverse justify-center lg:flex-row bg-[url('/public/bg3.jpg')] bg-no-repeat bg-cover">
       <div className='my-5 w-[20rem] mx-auto lg:mx-0 lg:w-[30rem] lg:m-10 border-8 border-gray-400 rounded-2xl shadow-3xl shadow-gray-950'>
            <img src="OIG1.jpeg" className=' border-8 border-transparent shadow-2xl shadow-black  lg:w-[32rem] rounded-3xl' alt="" />
        </div>
        <div className=' w-[8rem] lg:w-[50rem] lg:mt-8 '>
            <p className='opacity-85  flex items-center flex-col justify-center lg:mt-28 w-[22rem] lg:w-[40rem] mx-auto text-xs text-orange-800 lg:text-orange-500 lg:text-xl text-center line font-bold font-mono'><span className=' lg:text-7xl text-xl text-orange-400  lg:text-orange-500 brightness-95 '>Join the assignment group today</span>Elaborate Thinking: Unraveling the Tapestry of Knowledge</p>
            <div>

            </div>
        </div>
       </div>
        <div className=' '>
        <Section ></Section>
        </div>
        <div className=''>
            <p className='text-5xl mx-20 lg:text-6xl border-b-4  lg:mx-80 border-b-orange-500 font-semibold text-orange-500 text-center py-5 '>Features</p>
           
           <div className='flex-none lg:flex lg:flex-col w-[33rem] lg:w-full mx-auto lg:mx-0 space-y-5  gap-7 justify-center items-center my-10'>
                <div className=' w-[20rem] lg:w-[30rem]  mx-auto space-y-5 lg:flex gap-5 flex-none'>
                
                <p className='  w-[15rem] bg-gray-500 text-white text-xl font-semibold h-[5rem] text-center  flex items-center justify-center rounded-2xl'>Create Assignment</p>
              
                <p className='  w-[15rem] bg-gray-500 text-white text-xl font-semibold h-[5rem] text-center  flex items-center justify-center rounded-2xl'>Show Assignments</p>
                </div>
                <div className=' flex-none lg:w-[30rem] lg:mx-0 w-[20rem] mx-auto space-y-5 lg:flex gap-5'>
                
                <p  className='  w-[15rem] bg-gray-500 text-white text-xl font-semibold h-[5rem] text-center  flex items-center justify-center rounded-2xl'>Submit Assignment</p>
                
                <p className='  w-[15rem] bg-gray-500 text-white text-xl font-semibold h-[5rem] text-center  flex items-center justify-center rounded-2xl'>Mark Assignment</p>
                </div>
                
            </div>
           
        </div>
        <div>
           <Acordian></Acordian>
        </div>
        <div>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Home;