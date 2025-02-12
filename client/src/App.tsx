
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Packages from './components/Packages';
import Contact from './pages/Contact';

import MainLayout from './components/dashboard/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Dashboard/Users';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Users />} />
        </Route>




      </Routes>

       

    </Router>
  )
}

export default App
