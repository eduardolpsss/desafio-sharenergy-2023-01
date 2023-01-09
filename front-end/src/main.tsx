import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// Importando páginas
import UsersList from './pages/UsersListPage'
import CatHttpCodePage from './pages/CatHttpCodePage'
import RandomDogPage from './pages/RandomDogPage'
import ClientsListPage from './pages/ClientsListPage'

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users-list",
    element: <UsersList />,
  },
  {
    path: "/cat-http-code",
    element: <CatHttpCodePage />,
  },
  {
    path: "/random-dog",
    element: <RandomDogPage />,
  },
  {
    path: "/clients-list",
    element: <ClientsListPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={BrowserRouter}/>
)
