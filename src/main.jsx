import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Errorpage from './components/Eror404page.jsx'
import Signinpage from './pages/SignInpage.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Errorpage />
  },
  {
    path: '/about',
    element: <Aboutpage />,
    errorElement: <Errorpage />
  },
  {
    path: '/signin',
    element: <Signinpage />
  },
  {
    path:'/signup',
    element: <Signup />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
