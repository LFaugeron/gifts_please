import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ConnectPage from "./pages/ConnectPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CheckInPage from "./pages/CheckInPage.jsx";
import AcceptedPage from "./pages/AcceptedPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <ConnectPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },
            {
                path: "/checkin",
                element: <CheckInPage/>
            },
            {
                path: "/in",
                element: <AcceptedPage/>
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
