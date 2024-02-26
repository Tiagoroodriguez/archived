import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Inicio } from './pages/Inicio/Inicio'
import { CrearCuenta } from './pages/Cuenta/CrearCuenta';
import { IniciarSesion } from './pages/Cuenta/IniciarSesion';
import { NotFount } from './pages/Not Found/NotFound';
import { Tienda } from './pages/Tienda/Tienda';


const router = createBrowserRouter([{
    path:'/',
    element: <Inicio/>,
    errorElement: <NotFount/>,
  },
  {
    path:'/acount/register',
    element: <CrearCuenta/>,
  },
  {
    path:'/acount/login',
    element: <IniciarSesion/>,
  },
  {
    path:'/tienda',
    element: <Tienda/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
