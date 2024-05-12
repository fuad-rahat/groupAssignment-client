import React, { useEffect, useState } from 'react';
import AssignmentCart from './AssignmentCart';
import UseAll from '../Hooks/UseAll';

const Assignments = () => {
    const [formData, setFormData] = useState([]);
    const [filteredFormData, setFilteredFormData] = useState([]);
    const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState('All');
    const { refetch ,isFetching ,data }=UseAll();
    console.log(data);
    useEffect(() => {
        fetch('https://group-assignment-server.vercel.app/all')
            .then(res => res.json())
            .then(data => {
                setFormData(data);
                setFilteredFormData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (selectedDifficultyLevel === 'All') {
            setFilteredFormData(formData);
        } else {
            const filteredData = formData.filter(item => item.difficultyLevel === selectedDifficultyLevel);
            setFilteredFormData(filteredData);
        }
    }, [selectedDifficultyLevel, formData]);

    const handleFilter = (difficultyLevel) => {
        setSelectedDifficultyLevel(difficultyLevel);
    };

    return (
       <div>
        <div className=' flex gap-3 justify-center my-5'>
            
            <button className='btn' onClick={() => handleFilter('All')}>All</button>
            <button  className='btn' onClick={() => handleFilter('Easy')}>Easy</button>
            <button  className='btn' onClick={() => handleFilter('Medium')}>Medium</button>
            <button  className='btn' onClick={() => handleFilter('Hard')}>Hard</button>
        </div>
        <div className=' w-[16rem] lg:w-[90rem] gap-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {filteredFormData.map(dt => (
                <AssignmentCart key={dt._id} setFilteredFormData={setFilteredFormData} setFormData={setFormData} filteredFormData={filteredFormData} formData={formData} dt={dt} refetch={refetch} />
            ))}
        </div>
       </div>
    );
};

export default Assignments;
