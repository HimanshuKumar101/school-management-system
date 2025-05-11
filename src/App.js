import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Attendance from './pages/Attendance';
import Results from './pages/Results';
import Events from './pages/Events';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import Children from './pages/Children';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute roles={['admin', 'teacher', 'student', 'parent']}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="students"
                element={
                  <ProtectedRoute roles={['admin', 'teacher']}>
                    <Students />
                  </ProtectedRoute>
                }
              />
              <Route
                path="teachers"
                element={
                  <ProtectedRoute roles={['admin']}>
                    <Teachers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="attendance"
                element={
                  <ProtectedRoute roles={['admin', 'teacher']}>
                    <Attendance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="results"
                element={
                  <ProtectedRoute roles={['admin', 'teacher', 'student', 'parent']}>
                    <Results />
                  </ProtectedRoute>
                }
              />
              <Route
                path="events"
                element={
                  <ProtectedRoute roles={['admin', 'teacher', 'student', 'parent']}>
                    <Events />
                  </ProtectedRoute>
                }
              />
              <Route
                path="reports"
                element={
                  <ProtectedRoute roles={['admin', 'teacher']}>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route
                path="settings"
                element={
                  <ProtectedRoute roles={['admin', 'teacher', 'student', 'parent']}>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="messages"
                element={
                  <ProtectedRoute roles={['admin', 'teacher', 'student', 'parent']}>
                    <Messages />
                  </ProtectedRoute>
                }
              />
              <Route
                path="children"
                element={
                  <ProtectedRoute roles={['parent']}>
                    <Children />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
