import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import Admin from './components/admin'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Profile from './components/Profile'
import Campus from './components/Campus'
import Notifications from './components/Notifications'
import './App.css'

function App() {
  const router = createBrowserRouter([{path : "/",element  :<><Login/></>},
    {path : "/home",element  :<><Home/></>},{path : "/admin",element  :<><Admin/></>},
    {path : "/student",element  :<><Student/></>},{path : "/teacher",element  :<><Teacher/></>},
    {path : "/profile",element  :<><Profile/></>},{path : "/campus",element  :<><Campus/></>},
    {path : "/notification",element  :<><Notifications/></>}
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
