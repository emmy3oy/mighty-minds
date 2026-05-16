import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PostJob from "./pages/PostJobs";
import Jobs from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
