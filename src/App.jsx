import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout1 from './Layouts/Layout1'
import Home from './Pages/Home'

function App() {
  const myRoute=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout1/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>     
    </>
  )
}

export default App
