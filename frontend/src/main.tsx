import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomeScreen from './screens/HomeScreen.tsx'
import { LoginScreen } from './screens/LoginScreen.tsx'
import { RegisterScreen } from './screens/RegisterScreen.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='/' element={<HomeScreen/>}/>
      <Route  path='/login' element={<LoginScreen/>}/>
      <Route  path='/register' element={<RegisterScreen/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
