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
import Layout from './components/ScrollToTop/Layout';


const router = createBrowserRouter([{
    path:'/',
    element: 
    <Layout>
      <Inicio/>
    </Layout>,
    errorElement: <NotFount/>,
  },
  {
    path:'/acount/register',
    element: 
    <Layout>
      <CrearCuenta/>
    </Layout>,
  },
  {
    path:'/acount/login',
    element: 
    <Layout>
      <IniciarSesion/>
    </Layout>,
    
  },
  {
    path:'/tienda',
    element:
    <Layout>
      <Tienda/>
    </Layout>,
  },
  {
    path:'/guia-de-talles',
    element: 
    <Layout>
      <GuiaTalles/>
    </Layout>,
  },
  {
    path:'/contacto',
    element: 
    <Layout>
      <Contacto/>
    </Layout>,
  },
  {
    path:'/detalle-producto',
    element: 
    <Layout>
      <DetalleProducto/>
    </Layout>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
