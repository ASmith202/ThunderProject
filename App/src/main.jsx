import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HighScore from './Components/HighScore/HighScore.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
{
  path: '/HighScore',
  element:<HighScore/>
},
{
  path: '/LogIn',
  element:<LogIn/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



