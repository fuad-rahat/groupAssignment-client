import  { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Update = () => {
    const { id } = useParams();
    const { user }= useContext(AuthContext)
    const [formData, setFormData] = useState([]) || {};
    
    // const [isMarksDone, setIsMarksDone] = useState(false);

    useEffect(() => {
        fetch(`https://group-assignment-server.vercel.app/all/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    title: data.title || '',
                    creatorEmail: data.creatorEmail || '',
                    thumbnailUrl: data.thumbnailUrl || '',
                    marks: data.marks || 0,
                    difficultyLevel: data.difficultyLevel || 'Easy',
                    description: data.description || '',
                    deadline: data.deadline ? new Date(data.deadline) : new Date(),
                    // IsSubmitted: data.IsSubmitted || false
                });
                // setIsMarksDone(data.IsSubmitted || false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]); // Make sure to include id in the dependency array to refetch data when id changes

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
    // const handleMarksDoneChange = (e) => {
    //     const isChecked = e.target.checked;
    //     setIsMarksDone(isChecked);
    //     setFormData({
    //         ...formData,
    //         IsSubmitted: isChecked
    //     });
    // };
    console.log(formData);
    const updateHandler=(e)=>{
        e.preventDefault();
        fetch(`https://group-assignment-server.vercel.app/all/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                Swal.fire({
                                title: "Success!",
                                text: "Product Updated Successfully",
                                icon: "success"
                            });
            }
            else{
                    Swal.fire({
                title: "Error!",
                text: "Failed to Update Product",
                icon: "error"
            });
            }
            
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    
    return (
        <div>
             <div>
                <div className="hero  min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-[27rem] lg:w-[40rem] shadow-2xl bg-base-100">
                            <form className="card-body "  onSubmit={updateHandler} >
                            {/* <div className="form-control flex-1">
                                <input type="text" placeholder="Enter product name" name='name' className="input input-bordered" value={data.name || ''} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                            </div> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Enter your assignment title" value={formData.title || ''} onChange={handleChange} className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="creatorEmail" placeholder="Enter your email" value={formData.creatorEmail || ''} onChange={handleChange} className="input input-bordered" required />
                                </div> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Thumbnail Image URL</span>
                                    </label>
                                    <input type="text" name="thumbnailUrl" placeholder="Enter your thumbnail url" value={formData.thumbnailUrl || ''} onChange={handleChange} className="input input-bordered" required />
                                </div>
                                <div className='flex  gap-48 items-center'>
                                    <div className='lg:flex w-[15rem] lg:w-full mx-auto lg:mx-0 gap-3'>
                                        <div>
                                            <p className='text-sm ml-10 lg:ml-0'>Enter marks</p>
                                            <input type="number" name="marks" className='border-2 mt-2 px-3  border-green-200 py-3 rounded-xl' value={formData.marks || ''} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <p className='p-1 text-sm ml-7 lg:ml-0'>Set the last date of submit</p>
                                            <DatePicker selected={formData.deadline || ''} className='border-2 border-green-200 py-3 px-2 rounded-xl' onChange={handleDateChange} />
                                        </div>
                                        <div>
                                            <p className='text-sm ml-10 lg:ml-0'>Pick difficulty level</p>
                                            <select name="difficultyLevel" className="mt-2 select select-success w-full max-w-xs" value={formData.difficultyLevel || ''} onChange={handleChange}>
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <textarea name="description" className="textarea textarea-accent w-full h-52" placeholder="Description" value={formData.description || ''} onChange={handleChange}></textarea>
                                </div>
                                {/* <div className="form-control flex flex-row gap-2 p-2 font-semibold justify-start">
                                   
                                    <div>
                                    <input type="checkbox" name="marksAsDone" checked={isMarksDone}  style={{width: '1.2rem', height: '1.5rem'}} className='w-5' onChange={handleMarksDoneChange} required/>
                                    </div>
                                    <div>
                                        <p>Mark as done</p>
                                    </div>
                                </div> */}
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

export default Update;