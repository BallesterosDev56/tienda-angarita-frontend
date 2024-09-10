import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './logic/authContext'; // Importamos el AuthProvider
import { useAuth } from './logic/authContext'
import { ProtectedRoute } from './logic/protectedRoute';

//pages:
import { Login } from './pages/User/login/Login';
import { Redirect } from './pages/User/redirect/Redirect';
import { Register } from './pages/User/register/Register';
import { Home } from '../src/pages/User/home/Home';
import { MoreInfo } from './components/moreInfo/MoreInfo';
import { HomeAdmin } from './pages/Admin/home/HomeAdmin';
import { Products } from './pages/Admin/products/Products';
import { NewProduct } from './pages/Admin/newProduct/NewProduct';
import { AdminProvider } from './logic/adminContext';
import { ProtectedAdmin } from './logic/protectedAdmin';
//import NotFoundPage from './pages/notFoundPage/NotFoundPage';


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
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
    ),
  },
  {
    path: '/tienda-angarita/home/:name_product',
    element: 
    <ProtectedRoute >
      <MoreInfo/>
    </ProtectedRoute>
  },
  {
    path: '/samuelodanieloadminstore/home_admin',
    element:
      <ProtectedAdmin >
        <HomeAdmin/>
      </ProtectedAdmin>
  },
  {
    path: '/samuelodanieloadminstore/home_admin/products',
    element:
    <ProtectedAdmin>
      <Products/>
    </ProtectedAdmin>
  },
  {
    path: '/samuelodanieloadminstore/home_admin/new_product',
    element:
    <ProtectedAdmin>
      <NewProduct/>
    </ProtectedAdmin>
  },
]);

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
      <RouterProvider router={Routes}></RouterProvider>
      </AdminProvider>
    </AuthProvider>

  )
}

export default App;
