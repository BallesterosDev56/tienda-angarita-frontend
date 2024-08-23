import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages:
import { Login } from './pages/login/Login';
import { Redirect } from './pages/redirect/Redirect';
import { Register } from './pages/register/Register';
import { Home } from '../src/pages/home/Home';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Redirect></Redirect>
  },
  {
    path: '/tienda-angarita/login',
    element: <Login></Login>
  },
  {
    path: '/tienda-angarita/register',
    element: <Register></Register>
  },
  {
    path: '/tienda-angarita/home',
    element: <Home></Home>
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App
