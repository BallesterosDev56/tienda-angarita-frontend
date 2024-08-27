import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './logic/authContext'; // Importamos el AuthProvider
import { useAuth } from './logic/authContext'

//pages:
import { Login } from './pages/login/Login';
import { Redirect } from './pages/redirect/Redirect';
import { Register } from './pages/register/Register';
import { Home } from '../src/pages/home/Home';
import { ProtectedRoute } from './logic/protectedRoute';
import { MoreInfo } from './components/moreInfo/moreInfo';

let {isAuthenticated} = useAuth;

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
    element: (
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/tienda-angarita/home/:name_product',
    element: 
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <MoreInfo/>
    </ProtectedRoute>
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
  )
}

export default App;
