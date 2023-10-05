
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
import Showdonor from './Views/Showdonor/Showdonor';
import Donateus from './Views/Donateus/Donateus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/event",
    element: <Events />,
  },
  {
    path: "/bloodbank",
    element: <Bloodbank />,
  },
  {
    path: "/donateus",
    element: <Donateus />,
  },
  {
    path: "/showdonar/:bloodGroup",
    element: < Showdonor/>,
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

