import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Signinpage from "./pages/SignInpage";
import Signuppage from "./pages/Signuppage";
import Testcomp from "./components/Testcomp";
import Dashboardpage from "./pages/Dashboardpage";

function App() {

  return ( 
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/test" element={<Testcomp />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboardpage /></PrivateRoute>} />
          </Routes>
    </Router>
  )
}

export default App
