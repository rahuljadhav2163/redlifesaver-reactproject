
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import About  from './Views/About/About';
import Blog from "./Views/Blog/Blog";
import Bloodbank  from './Views/Bloodbank/Bloodbank';
import Events from './Views/Events/Events';
import Home from './Views/Home/Home';
import SignUp from "./Views/SignUp/SignUp"
import ReadBlog from './../src/Views/ReadBlog/ReadBlog'
import CityEventPage from "./Views/Events/CityEventPage/CityEventPage"

import Showdonor from './Views/Showdonor/Showdonor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path:"/blog/read/:id",
    element:<ReadBlog/>,
  },
  {
    path: "/event",
    element: <Events/>,
  },
  {
    path: "/bloodbank",
    element: <Bloodbank />,
  },
  {

    path: "event/cityeventpage",
    element: <CityEventPage />,
  },
  {
    path: "/showdonar/:bloodGroup",
    element: <Showdonor/>,
  },
  {
    path:"/signup",
    element: <SignUp/>,
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

