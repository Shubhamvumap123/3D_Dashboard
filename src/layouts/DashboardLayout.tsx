import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Box, Settings, Bell, Search, Menu, User } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const SidebarItem = ({ icon: Icon, label, path, isExpanded }: { icon: any, label: string, path: string, isExpanded: boolean }) => (
    <NavLink
        to={path}
        className={({ isActive }) => clsx(
            "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group",
            isActive
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[inset_0_0_12px_rgba(59,130,246,0.1)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
        )}
    >
        <Icon className={clsx("w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110")} />
        {isExpanded && (
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-medium tracking-wide"
            >
                {label}
            </motion.span>
        )}
    </NavLink>
);

export default function DashboardLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    return (
        <div className="flex h-screen w-full bg-[#0a0f1a] overflow-hidden">

            {/* Sidebar background decorative glow */}
            <div className="absolute top-0 left-0 w-64 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

            {/* Sidebar */}
            <motion.aside
                animate={{ width: isSidebarExpanded ? 260 : 80 }}
                className="relative z-20 h-full glass-panel border-r border-white/5 flex flex-col pt-6 pb-4"
            >
                <div className="flex items-center gap-3 px-6 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Box className="w-5 h-5 text-white" />
                    </div>
                    {isSidebarExpanded && (
                        <motion.span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-wider text-glow">
                            3DDASHBOARD
                        </motion.span>
                    )}
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <SidebarItem icon={LayoutDashboard} label="Overview" path="/dashboard" isExpanded={isSidebarExpanded} />
                    <SidebarItem icon={BarChart3} label="Analytics" path="/analytics" isExpanded={isSidebarExpanded} />
                    <SidebarItem icon={Box} label="3D Studio" path="/studio" isExpanded={isSidebarExpanded} />
                </nav>

                <div className="px-4 mt-auto">
                    <SidebarItem icon={Settings} label="Settings" path="/settings" isExpanded={isSidebarExpanded} />
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative z-10">

                {/* Top Header */}
                <header className="h-20 border-b border-white/5 glass-panel flex flex-end items-center px-8 justify-between">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                            className="p-2 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <div className="relative group">
                            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search resources, models..."
                                className="bg-slate-900/50 border border-white/10 rounded-full pl-10 pr-4 py-2 w-64 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 rounded-full text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-blue-500 border border-[#0f172a]"></span>
                        </button>
                        <div className="h-8 w-px bg-white/10 mx-2" />
                        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border border-white/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-slate-300" />
                            </div>
                        </button>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-auto relative p-8">
                    {/* Global ambient background glow for depth */}
                    <div className="absolute top-[20%] right-[10%] w-[40rem] h-[40rem] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
