import { useState } from 'react'
import FirstPage from './pages/Home'
import Information from './pages/first.jsx'
import UpdateProfile from './pages/updateProfile.jsx'
import LightSwitch from './pages/lightSwitch.jsx'
import Quadratic from './pages/Formula.jsx'
import UserRegistrationForm from './pages/userRegistration.jsx'
import HomePage from './pages/homePage/homePage.jsx'
import Login from './pages/loginPage/login.jsx'
import {Routes, Route, Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardPage from './pages/DashboardPage.jsx'
import NavBar from './components/navBar.jsx'
import ProfilePage from './pages/profile.jsx'
import AdminDashboard from './pages/Admin/adminDashboard.jsx'
import UserDashboard from './pages/userDashboard.jsx'
import Footer from './components/footer.jsx'
import ProductDetails from './pages/Products/singleProduct.jsx'


function App() {

  return (
      <>
      <AuthProvider>
      <Toaster position="top-right"/>
      {/* <FirstPage name = "Eleanor" age = {45}/> */}
      {/* <Information/> */}
      {/* <LightSwitch/> */}
      
      {/* <Counting/>
      <UpdateProfile/> */}
      {/* <Quadratic/> */}
      {/* <Posts/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<UserRegistrationForm/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

      </Routes>
      <Footer/>
      </AuthProvider>
    </>
  )
}

export default App;
