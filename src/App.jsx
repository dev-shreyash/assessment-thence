import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './routes/Layout/layout.jsx';
import FormPage from './routes/formPage/formPage.jsx';
import SuccessMessagePage from './routes/successMessagePage/successMessagePage';
import Homepage from './routes/homePage/homePage';


function App() {

 const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/formpage",
        element:<FormPage/>
      },
      {
        path:"success",
        element:<SuccessMessagePage/>
      }

    ]
  }
 ])
 return <RouterProvider router={router} />;

  
}

export default App
