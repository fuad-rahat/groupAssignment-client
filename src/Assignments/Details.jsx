import React, { useContext, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
import { saveAs } from 'file-saver';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { user } =useContext(AuthContext);
    const { _id, title, creatorEmail, thumbnailUrl, marks, difficultyLevel, description, deadline } = data || {};

    console.log(user);

    const submitHandler = async (e) => {
        e.preventDefault();
        const form = e.target;
        const link = form.link.value;
        const note = form.note.value;
        const formData = {
            link,
            note,
            title,
            creatorEmail,
            thumbnailUrl,
            marks,
            difficultyLevel,
            description,
            deadline,
            submittedBy: user?.displayName,
            submitEmail: user?.email
            
        };
        try {
            const result = await axios.post('https://group-assignment-server.vercel.app/submit', formData);
            if (result.statusText === "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Assignment Submitted Successfully",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Assignment Submission Failed",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error submitting assignment:', error.message);
        }
    };
    
   
    

    return (
        <div>
            <div>
                <img className=' w-[20rem] lg:w-[40rem] rounded-2xl mx-auto' src={thumbnailUrl} alt="" />
            </div>
            <div className='flex my-5 flex-col justify-center items-center'>
                <p className='font-semibold text-lg'>Title:{title}</p>
                <p className='font-semibold text-lg'>Marks: {marks}</p>
                <p className='font-semibold text-lg'>Creator email: {creatorEmail}</p>
                <p className='font-semibold text-lg'>Difficulty: {difficultyLevel}</p>
                <p className='font-semibold text-lg text-center'>Description: {description}</p>
            </div>
            <div className='flex justify-center'>
                {/* The button to open modal */}
                <label htmlFor="my_modal_6" className="btn">Take Assignment</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <p className='text-center mb-3 text-xl font-semibold'>Submit Assignment PDF File</p>
                        <form onSubmit={submitHandler}>
                            <div className='flex flex-col gap-5'>
                                <div className='flex justify-center items-center flex-col'>
                                    <input name='note' type="text" placeholder='Quick note text' className='p-2 w-[20rem] h-[3rem] border-2 border-green-400 rounded-lg'  />
                                </div>
                                <div className='flex justify-center'>
                                <input name='link' type="text" placeholder='Enter your google drive link' className='p-2 w-[20rem] h-[3rem] border-2 border-green-400 rounded-lg'  />
                                </div>
                                <div className='flex justify-center'>
                                    <input type="submit" value="Submit Assignment" className='btn  btn-md w-[10rem]' />
                                </div>
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
