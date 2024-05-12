import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Ascart = ({ as }) => {
    const { _id, link, note, marks, submittedBy, title } = as || {};
    const { user } = useContext(AuthContext);
    const [marksInput, setMarksInput] = useState('');

    const handleMarksChange = (event) => {
        setMarksInput(event.target.value);
    };

    const submitMarks = async (e) => {
        e.preventDefault();
        const feedback= e.target.feedback.value;
        try {
            const result = await axios.put(`https://group-assignment-server.vercel.app/submit/${_id}`, {
                result: marksInput,
                feedback: feedback
            });
            if (result.statusText === "OK") {
                Swal.fire({
                    title: "Marks Given Successfully!",
                    text: "Marks have been submitted successfully.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to give marks.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error submitting marks:', error.message);
        }
    };

    return (
        <div>
            <div className='w-[17rem] h-[10rem] flex flex-col gap-2 justify-center items-center rounded-xl bg-green-200 font-semibold shadow-xl shadow-red-500'>
                <p>Title: {title}</p>
                <p>Total Marks: {marks}</p>
                <p>Examinee: {submittedBy}</p>
                <div className='flex justify-center'>
                    <label htmlFor="my_modal_6" className='btn bg-orange-400 text-white btn-sm text-lg'>Give Marks</label>
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <p className='text-center mb-3 text-xl font-semibold'>Submit Marks</p>
                            <div className='my-5'>
                                <p>Provided pdf link</p>
                                <a className=' underline text-red-500' href={link}>{link}</a>
                            </div>
                            <div className='my-5'>
                                <p>Note:</p>
                                <p>{note}</p>
                            </div>
                            <form onSubmit={submitMarks}>
                               <div className=' flex '>
                               <div className=' flex flex-col gap-3'>
                                <input className='p-2 mr-2 border-2 border-green-500 rounded-lg' type="number" min="0" max={marks} value={marksInput} onChange={handleMarksChange} placeholder={`Enter marks (0-${marks})`} />
                                <input type="text" className='rounded-lg border-2 border-green-500 p-2 mr-2 ' placeholder='Give Feedback' name='feedback' />
                                </div>
                               <div className='flex justify-center items-center'>
                               <input type="submit" className='btn  bg-orange-500 text-white' value="Submit Marks" />
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
        </div>
    );
};

export default Ascart;
