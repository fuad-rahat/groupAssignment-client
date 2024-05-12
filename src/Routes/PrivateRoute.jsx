import React, { Children, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user ,loading }=useContext(AuthContext)
    const location= useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if(!user || !user.email)
    {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;