import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import DashboardHome from './pages/DashboardHome';

// Mock Pages for routing
const AnalyticsPage = () => <div className="p-6 text-2xl font-light text-slate-300">Analytics Data</div>;
const ThreeDStudio = () => <div className="p-6 text-2xl font-light text-slate-300">3D Interaction Studio</div>;

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
