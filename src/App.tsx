import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage } from './auth/forgot-password';
import { LoginPage } from './auth/login';
import { MfaPage } from './auth/mfa';
import { ResetPasswordPage } from './auth/reset-password';
import { PlaceholderPage } from './patient';
import { DashboardPage } from './patient/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/mfa" element={<MfaPage />} />
      <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/appointments" element={<PlaceholderPage title="My Appointments" />} />
      <Route path="/lab-results" element={<PlaceholderPage title="Lab Results" />} />
      <Route path="/imaging-results" element={<PlaceholderPage title="Imaging Results" />} />
      <Route path="/prescriptions" element={<PlaceholderPage title="Prescriptions" />} />
      <Route path="/documents" element={<PlaceholderPage title="Documents" />} />
      <Route path="/profile" element={<PlaceholderPage title="My Profile" />} />
    </Routes>
  );
}

export default App;
