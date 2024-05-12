import React from 'react';

const Cart = ({sa}) => {
    const {sStatus,marks,result,title,feedback}=sa || {};
    return (
        <div className='w-[20rem] shadow-xl shadow-red-300 rounded-2xl text-black bg-green-200  p-3'>
            <p><span className=' font-semibold text-lg'>Title:</span> {title}</p>
            <p><span className='font-semibold text-lg'>Obtained Marks: </span>{result}</p>
            <p><span className='font-semibold text-lg'>Total Marks: </span>{marks}</p>
            <p><span className='font-semibold text-lg'>Status: </span>{sStatus}</p>
            <p><span className='font-semibold text-lg'>Feedback: </span>{feedback}</p>
        </div>
    );
};

export default Cart;