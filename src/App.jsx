import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PublicDashboard from './pages/PublicDashboard';
import AuthMiddleware from './middleware/AuthMiddleware';
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={
            <AuthMiddleware requireAuth={false}>
              <PublicDashboard />
            </AuthMiddleware>
          } />
          <Route path="/login" element={
            <AuthMiddleware requireAuth={false}>
              <Layout>
                <Login />
              </Layout>
            </AuthMiddleware>
          } />
          <Route path="/register" element={
            <AuthMiddleware requireAuth={false}>
              <Layout>
                <Register />
              </Layout>
            </AuthMiddleware>
          } />

          {/* Protected routes */}
          <Route path="/dashboard" element={
            <AuthMiddleware>
              <Dashboard />
            </AuthMiddleware>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
