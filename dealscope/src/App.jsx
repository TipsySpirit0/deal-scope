import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Testcomp from "./components/Testcomp";
import Dashboard from "./components/Dashboard";

function App() {

  return ( 
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<Testcomp />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
    </Router>
  )
}

export default App
