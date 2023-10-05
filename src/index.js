
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
import CityEventPage from './Views/Events/CityEventPage/CityEventPage';


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
    element: <Blog />,
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
    path: "event/cityeventpage",
    element: <CityEventPage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

