
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
import AddPackage from './pages/Dashboard/AddPackage';
import AdminPackages from './pages/Dashboard/Packages';
import Vlogs from './pages/Dashboard/Vlogs';
import AddVlog from './pages/Dashboard/AddVlog';
import Admins from './pages/Dashboard/Admins';
import AddAdmin from './pages/Dashboard/AddAdmin';
import AdminProfile from './pages/Dashboard/AdminProfile';
import Reservation from './pages/Dashboard/Reservation';
import Payment from './pages/Dashboard/Payment';

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

        <Route path="/dashboard/packages" element={<AdminPackages />} />

        <Route path="/dashboard/packages/add" element={<AddPackage />} />

        <Route path="/dashboard/vlogs" element={<Vlogs />} />

        <Route path="/dashboard/vlogs/add" element={<AddVlog />} />

        <Route path="/dashboard/admins" element={<Admins />} />

        <Route path="/dashboard/admins/add" element={<AddAdmin />} />

        <Route path="/dashboard/admins/profile" element={<AdminProfile />} />

        <Route path="/dashboard/reservation" element={<Reservation />} />

        <Route path="/dashboard/payment" element={<Payment />} />
        
        </Route>

        




      </Routes>

       

    </Router>
  )
}

export default App
