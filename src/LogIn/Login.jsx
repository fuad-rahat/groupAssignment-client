import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {signin ,logInWithGoogle}= useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        // Password validation
        if (password.length > 6 || /[A-Z]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            // If password doesn't meet the criteria
            Swal.fire({
                title: "Error!",
                text: "Password must be less than 6 characters and not contain a capital letter or special character.",
                icon: "error"
            });
            return;
        }
    
        signin(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Good job!",
                    text: "LogIn Successfully",
                    icon: "success"
                });

                navigate( location?.state ? location.state : '/' )
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: "Error!",
                    text: "LogIn Failed",
                    icon: "error"
                });
            })
    }
    
    
    const googleloginHandler=()=>{
        logInWithGoogle()
        .then(res=>{
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token=credential.accessToken;
            const user=res.user;
            console.log(user);
            Swal.fire({
                title: "Good job!",
                text: "LogIn Successfully",
                icon: "success"
            });
            navigate( location?.state ? location.state : '/' )
        })
        .catch(err=>{
            console.log(err.message);
            Swal.fire({
                title: "!!!!!!",
                text: "LogIn Failed",
                icon: "error"
            });
        })
        
    }
    
    return (
        <div className="hero min-h-screen -mt-10 mb-14">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center text-2xl lg:text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Before enjoying our website please log in first.</p>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={loginHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className='btn' value="Log In" />
        </div>
        <p className='text-center text-sm'>You don't have any accout?
        <br />Please <Link to={'/register'}><a href="" className='text-red-400 text-xl font-bold'>Registration</a></Link> first</p>
      </form>
      <div className='flex justify-center items-center mb-4'>
         <button onClick={googleloginHandler} className='btn'> LogIn with <span><i className="fa-brands fa-google"></i></span>
</button>      
</div>
    </div>
  </div>
</div>
    );
};

export default Login;