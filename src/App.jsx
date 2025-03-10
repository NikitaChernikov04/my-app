import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import UserProfile from './components/UserProfile';
import CreateOrder from './components/CreateOrder';
import Dashboard from './components/Dashboard';
import OrderList from './components/OrderList';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </Router>
  );
};

export default App;
