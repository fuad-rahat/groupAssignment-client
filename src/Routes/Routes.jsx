import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Main/Main';
import CreateAssignment from '../CreateAssignment/CreateAssignment';
import Login from '../LogIn/Login.jsx';
import Register from '../Register/Register.jsx';
import Assignments from '../Assignments/Assignments.jsx';
import SubmittedAssignments from '../SubmittedAssignments/SubmittedAssignments.jsx';
import Update from '../Assignments/Update.jsx';
import Details from '../Assignments/Details.jsx';
import MyAssignment from '../MyAssignment/MyAssignment.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/create",
          element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/assignments",
          element:<Assignments></Assignments>
        },
        {
          path:"/submitted-assignments",
          element:<PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
        },
        {
          path:"/update/:id",
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params})=> fetch(`https://group-assignment-server.vercel.app/all/${params.id}`)
        },
        {
          path:"/details/:id",
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=> fetch(`https://group-assignment-server.vercel.app/all/${params.id}`)
        },
        {
          path:"/my-assignments",
          element:<PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
        }
      ]
    },
  ]);

export default router;