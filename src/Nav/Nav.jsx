import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Nav = () => {
  const {user , logout }=useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const logoutHandler=()=>{
   
     logout()
     .then(()=>{})
     .catch((err)=>{
      console.log(err.message);
     })
  }
  console.log(user);
  
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
       <NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active rounded-3xl bg-orange-500 text-white" : ""
  }>
  <li className="rounded-3xl"><a className="">Home</a></li>
</NavLink>
<NavLink  to="/assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active rounded-xl bg-orange-500 text-white" : ""
  }>
  <li><a>Assignments</a></li>
</NavLink>
<NavLink  to="/my-assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>My Assignments</a></li>
</NavLink>
<NavLink  to="/create" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-orange-500 text-white" : ""
  }>
  <li className=" rounded-3xl"><a>Create Assignment</a></li>
</NavLink>
<NavLink  to="/submitted-assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>Submitted Assignment</a></li>
</NavLink>


      </ul>
    </div>
    <Link className=" " to={'/'}>
    <img src="Color logo with background.png" className=" w-16 h-12 ml-5  rounded-full" alt="" />
    <span className="ml-2 text-sm font-extrabold text-orange-400 text-center w-[7rem]"> Group Assignment</span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
     
      
<NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active   bg-orange-500 text-white" : ""
  }>
  <li><a>Home</a></li>
</NavLink>
<NavLink  to="/assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>Assignments</a></li>
</NavLink>
<NavLink  to="/my-assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>My Assignments</a></li>
</NavLink>
<NavLink  to="/create" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>Create Assignment</a></li>
</NavLink>
<NavLink  to="/submitted-assignments" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active  bg-orange-500 text-white" : ""
  }>
  <li><a>Submitted Assignment</a></li>
</NavLink>

    </ul>
  </div>
  <div className="navbar-end gap-3">
    {
    user ? 
  <>
  <a className="btn" onClick={logoutHandler}>Log Out</a>
  <div
              className="relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img
                src={user?.photoURL}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              {showTooltip && (
                <div className=" absolute w-[13rem] -left-12 -bottom-7 transform -translate-x-1/2   text-center p-2 rounded-md">
                  <p>{user?.displayName}</p>
                </div>
              )}
            </div>
  </>
  :
  <>
  <NavLink  to="/login" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active rounded-btn bg-orange-500  text-white" : ""
  }>
  <a className=" btn  ">Log In</a>
</NavLink>
<NavLink  to="/register" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active rounded-btn bg-orange-500  text-white" : ""
  }>
  <a className=" btn  ">Registration</a>
</NavLink>
  </>}
    
    
  </div>
</div>
        </div>
    );
};

export default Nav;