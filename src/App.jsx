import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Providers from './utils/redux/providers';
import WebLayout from './components/Layout/WebLayout';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Notifications from './pages/Notifications';
import TechnicalMonitoring from './pages/TechnicalMonitoring';
import AnalyticsReporting from './pages/AnalyticsReporting';
import FeedbackSupport from './pages/FeedbackSupport';
import SecurityManagement from './pages/SecurityManagement';
import BackupRestore from './pages/BackupRestore';
import AuthLayout from './components/Layout/AuthLayout';
import SignIn from './pages/SignIn';
import ActivityLog from './pages/ActivityLog';
import LogDetails from './pages/LogDetails';
import AuditLog from './pages/AuditLog';

function App() {

  return (
    <>
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route element={<WebLayout />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/user-management'>
                <Route index element={<UserManagement />} />
                <Route path="/user-management/activity-log" element={<ActivityLog/>} />
                <Route path="/user-management/activity-log/log-details" element={<LogDetails/>} />
              </Route>
              <Route path='/notification' element={<Notifications />} />
              <Route path='/technical-monitoring' element={<TechnicalMonitoring />} />
              <Route path='/analytics-reporting' element={<AnalyticsReporting />} />
              <Route path='/feedback-support' element={<FeedbackSupport />} />
              <Route path='/security-management'>
                <Route index element={<SecurityManagement />}/>
                <Route path='/security-management/add-user' element={<AuditLog/>}/>
                <Route path='/security-management/audit-log' element={<AuditLog/>}/>
              </Route>
              <Route path='/backup-restore' element={<BackupRestore />} />
            </Route>
            <Route element={<AuthLayout/>}>
            <Route path='/' element={<SignIn/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Providers>
    </>
  )
}

export default App
