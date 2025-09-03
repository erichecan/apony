import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './components/MainLayout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import TMSOverviewPage from './pages/TMSOverviewPage';
import TMSOrderPage from './pages/TMSOrderPage';
import TMSPage from './pages/TMSPage';
import WMSPage from './pages/WMS';
import FreightPage from './pages/Freight';
import FleetPage from './pages/Fleet';
import CRMPage from './pages/CRM';
import BillingPage from './pages/Billing';
import SettingsPage from './pages/Settings';

// Import Ant Design styles
import 'antd/dist/reset.css';

function App() {
  return (
    <LanguageProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
          },
        }}
      >
        <Router>
          <Routes>
            {/* Login route - outside main layout */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Main application routes - inside main layout */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="tms" element={<TMSOverviewPage />} />
              <Route path="tms/orders" element={<TMSOrderPage />} />
              <Route path="tms/dispatch" element={<TMSPage />} />
              <Route path="tms/driver-app" element={<TMSPage />} />
              <Route path="tms/tracking" element={<TMSPage />} />
              <Route path="wms" element={<WMSPage />} />
              <Route path="freight" element={<FreightPage />} />
              <Route path="fleet" element={<FleetPage />} />
              <Route path="crm" element={<CRMPage />} />
              <Route path="billing" element={<BillingPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            
            {/* Redirect any unknown routes to dashboard */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
