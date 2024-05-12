import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createuser }= useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const registrationHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        if (password.length > 6 || /[A-Z]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            // If password doesn't meet the criteria
            Swal.fire({
                title: "Error!",
                text: "Password must be at least 6 characters long and contain at least one capital letter and one special character.",
                icon: "error"
            });
            return;
        }
    
        createuser(email, password, name, photo)
            .then(user => {
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "Registration Successful",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    return (
        <div>
             <div>
            <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content -mt-20 flex-col gap-20 lg:flex-row-reverse">
    <div className=" text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration first!</h1>
      <p className="py-6">First complete your registration to login in this website</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={registrationHandler}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="Enter your name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="name" placeholder="Enter your photo url" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className='btn' value="Submit" />
        </div>
      </form>
      <div className='flex flex-col justify-center mb-2 items-center'>
        <p>Already have an account?</p>
        <p>Continue <Link to={'/login'}><span className='text-xl font-bold text-red-400'>Log In</span></Link> now</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;