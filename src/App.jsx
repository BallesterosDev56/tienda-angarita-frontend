import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages:
import { Login } from './pages/login/Login';
import { Redirect } from './pages/redirect/Redirect';
import { Register } from './pages/register/Register';

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
]);

function App() {

  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App
