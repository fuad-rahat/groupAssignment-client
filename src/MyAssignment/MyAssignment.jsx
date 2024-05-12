import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Cart from './Cart';

const MyAssignment = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const {user}=useContext(AuthContext);

    useEffect(() => {
        fetch('https://group-assignment-server.vercel.app/submit')
            .then(res => res.json())
            .then(data => {
                // Filter submitted assignments where sStatus is pending
                const pendingAssignments = data.filter(as => as.sStatus === "complete" && as.submitEmail === user?.email);
                setSubmittedAssignments(pendingAssignments);
                
            });
    }, []);
    return (
        <div>
            <p className=' my-5 text-4xl text-center text-orange-500 font-semibold '>Examined assignments</p>
            <div className='w-[20rem] lg:w-[80rem] gap-10 lg:gap-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
            {submittedAssignments.map(sa => (
                <Cart
                sa={sa}
                key={sa._id}></Cart>
            ))}
        </div>
            
        </div>
    );
};

export default MyAssignment;