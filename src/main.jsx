import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Inicio } from './layout/Inicio/Inicio'
import { CrearCuenta } from './layout/Cuenta/CrearCuenta';
import { IniciarSesion } from './layout/Cuenta/IniciarSesion';
import { NotFount } from './layout/Not Found/NotFound';
import { Tienda } from './layout/Tienda/Tienda';
import { GuiaTalles } from './layout/Guia Talles/GuiaTalles';
import { Contacto } from './layout/Contacto/Contacto';
import { DetalleProducto } from './components/Detalle Producto/DetalleProducto';


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
  {
    path:'/guia-de-talles',
    element: <GuiaTalles/>,
  },
  {
    path:'/contacto',
    element: <Contacto/>,
  },
  {
    path:'/detalle-producto',
    element: <DetalleProducto/>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
