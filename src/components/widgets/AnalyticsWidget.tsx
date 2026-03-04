import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const mockData = [
    { name: 'Mon', activeUsers: 4000, interactions: 2400 },
    { name: 'Tue', activeUsers: 3000, interactions: 1398 },
    { name: 'Wed', activeUsers: 4500, interactions: 3800 },
    { name: 'Thu', activeUsers: 2780, interactions: 3908 },
    { name: 'Fri', activeUsers: 5890, interactions: 4800 },
    { name: 'Sat', activeUsers: 2390, interactions: 3800 },
    { name: 'Sun', activeUsers: 3490, interactions: 4300 },
];

export default function AnalyticsWidget() {
    return (
        <div className="w-full h-full min-h-[300px] flex flex-col justify-end">
            <div className="flex justify-between items-center mb-6 pl-2">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <span className="text-sm text-slate-300">Platform Active Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                        <span className="text-sm text-slate-300">3D Interactions</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full h-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} vertical={false} />
                        <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f1f5f9' }}
                            itemStyle={{ color: '#f1f5f9' }}
                        />
                        <Area type="monotone" dataKey="activeUsers" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                        <Area type="monotone" dataKey="interactions" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorInteractions)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
