import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AssignmentCart = ({ dt, refetch , setFilteredFormData , setFormData , filteredFormData , formData }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, creatorEmail, thumbnailUrl, marks, difficultyLevel } = dt || {};

    const deleteHandler = () => {
        axios.delete(`https://group-assignment-server.vercel.app/all/${_id}`)
            .then(response => {
                console.log(response.data);
                Swal.fire({
                    title: "Removed Done!",
                    text: "Assignment removed from cart successfully",
                    icon: "success"
                });
                // Filter out the deleted assignment from the state
                const updatedFormData = formData.filter(item => item._id !== _id );
                setFormData(updatedFormData);
                setFilteredFormData(updatedFormData);
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while removing the assignment from cart",
                    icon: "error"
                });
            });
    };
    

    return (
        <div>
            <div className=' w-[17rem] shadow-xl shadow-blue-500 rounded-3xl'>
                <div>
                    <img className=' rounded-3xl w-[16rem] mx-auto' src={thumbnailUrl} alt="" />
                </div>
                <p className=' text-base font-semibold text-center'>Title: {title}</p>
                <p className=' text-base font-semibold text-center'>Marks: {marks}</p>
                <p className='text-base font-semibold text-center'>Difficulty: {difficultyLevel}</p>
                <div className='flex gap-5 p-2 justify-center'>
                    <Link to={`/details/${_id}`}><button className='btn btn-info btn-xs text-white'>View Assignment</button></Link>
                    {user?.email === creatorEmail ? (
                        <Link to={`/update/${_id}`}><button className='btn btn-info btn-xs text-white '>Update Assignment</button></Link>
                    ) : (
                        <button disabled className='btn btn-info  btn-xs'>Update Assignment</button>
                    )}
                </div>
                <div className='flex justify-center '>
                    {user?.email === creatorEmail ? (
                        <button onClick={deleteHandler} className='btn mb-2 btn-info btn-xs text-white '>Delete Assignment</button>
                    ) : (
                        <button disabled className='btn mb-2 btn-info  btn-xs'>Delete Assignment</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AssignmentCart;
