import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const CreateAssignment = () => {
    const { user }= useContext(AuthContext)
    const [formData, setFormData] = useState({
        title: '',
        creatorEmail: user?.email,
        thumbnailUrl: '',
        marks: '',
        difficultyLevel: 'Easy',
        description: '',
        deadline: new Date(), // Default value for the deadline
        // IsSubmitted: false  Adding IsSubmitted property with initial value false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            deadline: date
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send formData to the backend using fetch or Axios
        fetch('https://group-assignment-server.vercel.app/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data)
            {
                Swal.fire({
                    title: "Good job!",
                    text: "Assignment Created Successfully",
                    icon: "success"
                });
            }
        })
    };

    return (
        <div>
            <div className='bg-base-200'>
            <p className='text-4xl my-1 lg:my-0 text-center font-semibold text-orange-500'>Create your Assignment</p>

                <div className="hero  min-h-screen mt-2 lg:-mt-7 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 lg:w-[40rem] shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Enter your assignment title" value={formData.title} onChange={handleChange} className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="input input-bordered" required />
                                </div> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Thumbnail Image URL</span>
                                    </label>
                                    <input type="text" name="thumbnailUrl" placeholder="Enter your thumbnail url" value={formData.thumbnailUrl} onChange={handleChange} className="input input-bordered" required />
                                </div>
                                <div className='flex gap-48 justify-center items-center'>
                                    <div className='flex flex-col lg:flex-row justify-center items-center gap-3'>
                                        <div className=' '>
                                            <p className='text-sm text-center lg:text-start'>Enter marks</p>
                                            <input type="number" name="marks" className='border-2 flex flex-1  mt-2 px-3  border-green-200 py-3 rounded-xl' value={formData.marks} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <p className='p-1 text-sm'>Set the last date of submit</p>
                                            <DatePicker selected={formData.deadline} className='border-2 border-green-200 py-3 px-2 rounded-xl' onChange={handleDateChange} />
                                        </div>
                                        <div>
                                            <p className='text-sm'>Pick difficulty level</p>
                                            <select name="difficultyLevel" className="mt-2 select select-success w-full max-w-xs" value={formData.difficultyLevel} onChange={handleChange}>
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <textarea name="description" className="textarea textarea-accent w-[24rem] lg:w-[36rem] h-40" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn' value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;
