import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/index';
import Notification from '../Pages/Notification/index';
import Explore from '../Pages/Explore/index';
import Error from '../Pages/Error/index'
import MainLayout from "../Layout/Main";
const routes = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'explore',
                element:<Explore/>
            },
            {
                path:'notification',
                element:<Notification/>
            },
            {
                path:'*',
                element:<Error/>
            }
        ]
    },

])

export default routes;