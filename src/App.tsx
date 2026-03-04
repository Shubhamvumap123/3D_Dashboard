import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import DashboardHome from './pages/DashboardHome';

import AnalyticsPage from './pages/AnalyticsPage';
import ThreeDStudio from './pages/ThreeDStudio';

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="studio" element={<ThreeDStudio />} />
            </Route>
        </Routes>
    );
}

export default App;
