import React, { useEffect, useState } from 'react';
import Ascart from './Ascart';

const SubmittedAssignments = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    useEffect(() => {
        fetch('https://group-assignment-server.vercel.app/submit')
            .then(res => res.json())
            .then(data => {
                // Filter submitted assignments where sStatus is pending
                const pendingAssignments = data.filter(as => as.sStatus === "pending");
                setSubmittedAssignments(pendingAssignments);
            });
    }, []);

    return (
        <div>
            <p className=' my-5 text-4xl text-center text-orange-500 font-semibold '>Pending assignments</p>
            <div className='w-[16rem] lg:w-[80rem] gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
            {submittedAssignments.map(as => (
                <Ascart key={as._id} as={as} />
            ))}
        </div>
        </div>
    );
};

export default SubmittedAssignments;
