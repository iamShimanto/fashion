import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Home/Home'

function App() {
  const MyRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}/>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <>
      

      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
