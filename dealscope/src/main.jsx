import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Errorpage from './components/Eror404page.jsx'
import Signinpage from './pages/SignInpage.jsx'
import Signuppage from './pages/Signuppage.jsx'
import Dashboardpage from './pages/Dashboardpage.jsx'
import Testcomp from './components/Testcomp.jsx'


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
    element: <Signinpage />,
    errorElement: <Errorpage />
  },
  {
    path:'/signup',
    element: <Signuppage />,
    errorElement: <Errorpage />
  },
  {
    path:'/dashboard',
    element: <Dashboardpage />,
    errorElement: <Errorpage />
  },
  {
    path: '/test',
    element: <Testcomp />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
