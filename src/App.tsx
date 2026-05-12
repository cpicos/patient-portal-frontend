import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage } from './auth/forgot-password';
import { LoginPage } from './auth/login';
import { MfaPage } from './auth/mfa';
import { ResetPasswordPage } from './auth/reset-password';
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
    </Routes>
  );
}

export default App;
