import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import About from './About';
import OnlineServices from './OnlineServices ';
import ExploreCity from './ExploreCity';
import Contact from './Contact';
import RegisterHomePage from './RegisterHomePage';
import UserRegistrationForm from './UserRegistrationForm';
import DriverRegistrationForm from './DriverRegistrationForm';
import LoginComponentes from './LoginComponentes';
import Dashboard from './Dashboard';
import RouteSetup from './RouteSetup';
import UserLogin from './UserLogin';
import DriverLogin from './DriverLogin';
function Home() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/online-services" element={<OnlineServices/> }/>
        <Route path="/explore-city" element={<ExploreCity />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterHomePage />} />
        <Route path="/register/user-registrationform" element={<UserRegistrationForm/>} />
        <Route path="/register/driver-registrationform" element={<DriverRegistrationForm/>} />
        <Route path="/login" element={<LoginComponentes/>} />
        {/* <Route path="/route-setup" element={<RouteSetup />} /> */}
         <Route path="/dashboard" element={<Dashboard />} /> 
        {/* <Route path="/contact-officiers" element={<ContactOfficiers />} /> */}
        {/* <Route path="/contact-officiers/:id" element={<ContactOfficiersDetails />} /> */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/route-setup" element={<RouteSetup />} />
        {/* <Route path="/login" element={<Login />} /> */} 
      </Routes>
    </Layout>
  );
}

export default Home;
