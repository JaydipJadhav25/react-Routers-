import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./components/home/home.jsx"
import About from "./components/About/about.jsx"
import Contact from "./components/contact/contact.jsx"
import User from "./components/user/user.jsx"
//my routing
import Layout from "./com/layout.jsx"
import Home2 from './com/home.jsx'
import About2 from './com/about.jsx'
import Github2 from './com/github.jsx'
import User2 from './com/user.jsx'
import './index2.css'





// const router = createBrowserRouter([
      
//   {
//     path :"/",
//     element : <App/>,
//     children : [
//       {
//          path: "",
//          element :<Home/>
//       },
//       {
//         path :"About"  , 
//         element:<About/>
//       },
//       {
//         path :"Contact"  , 
//         element:<Contact/>
//       }

//     ]
    
//   }
 

// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route path='/' element={<App/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='user/:id' element={<User/>}/>

//     </Route>

//   )
// )

//my official routing 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home2/>}/>
//       <Route path='about' element={<About2/>}/>
//       <Route path='github' element={<Github2/>}/>
//       <Route path='user/:id' element={<User2/>}/>

//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
  
      <Route path='about' element={<About2/>}/>
         <Route path='admin/user/:id' element={<User2/>}/>
      
      <Route path='github' element={<Github2/>}/>
  

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
