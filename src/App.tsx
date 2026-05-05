import { Routes, Route, Navigate } from 'react-router-dom';
import CvPage from './pages/CvPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={
          <CvPage />
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}