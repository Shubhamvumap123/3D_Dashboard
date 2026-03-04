import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { WidgetGrid, WidgetContainer } from '../components/WidgetGrid';
import { Users, Server, Globe } from 'lucide-react';

const userEngagementData = [
    { name: 'Mon', active: 4000, new: 1200 },
    { name: 'Tue', active: 4500, new: 1800 },
    { name: 'Wed', active: 3800, new: 1100 },
    { name: 'Thu', active: 5200, new: 2100 },
    { name: 'Fri', active: 6100, new: 2800 },
    { name: 'Sat', active: 4900, new: 1500 },
    { name: 'Sun', active: 4200, new: 1300 },
];

const resourceData = [
    { name: 'US-East', cpu: 85, memory: 65, storage: 90 },
    { name: 'EU-West', cpu: 45, memory: 80, storage: 55 },
    { name: 'AP-South', cpu: 70, memory: 55, storage: 60 },
    { name: 'US-West', cpu: 60, memory: 40, storage: 75 },
];

const interactionData = [
    { name: 'Desktop', value: 65 },
    { name: 'Mobile', value: 25 },
    { name: 'Tablet', value: 10 },
];

const PIE_COLORS = ['#3b82f6', '#0ea5e9', '#6366f1'];

export default function AnalyticsPage() {
    return (
        <div className="h-full w-full flex flex-col gap-8 pb-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">System Analytics</h1>
                    <p className="text-slate-400 mt-2 font-light text-lg">Deep dive into platform usage and resource metrics.</p>
                </div>
            </div>

            <WidgetGrid>
                {/* User Engagement Area Chart */}
                <WidgetContainer title="User Engagement Trends" icon={<Users />} className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px]" delay={0.1}>
                    <div className="flex-1 w-full h-[320px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={userEngagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} vertical={false} />
                                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f1f5f9' }}
                                    itemStyle={{ color: '#f1f5f9' }}
                                />
                                <Area type="monotone" dataKey="active" name="Active Users" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
                                <Area type="monotone" dataKey="new" name="New Signups" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorNew)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </WidgetContainer>

                {/* Global Interaction distribution */}
                <WidgetContainer title="Interaction By Device" icon={<Globe />} className="col-span-1 min-h-[400px]" delay={0.2}>
                    <div className="flex-1 w-full h-[300px] mt-4 flex items-center justify-center relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={interactionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {interactionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f1f5f9' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center display text for Donut chart */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-white">100%</span>
                            <span className="text-sm text-slate-400">Total Traffic</span>
                        </div>
                    </div>
                </WidgetContainer>

                {/* Resource Allocation */}
                <WidgetContainer title="Datacenter Resource Usage (%)" icon={<Server />} className="col-span-1 md:col-span-3 min-h-[400px]" delay={0.3}>
                    <div className="flex-1 w-full h-[320px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={resourceData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }} barSize={30}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} vertical={false} />
                                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f1f5f9' }}
                                />
                                <Bar dataKey="cpu" name="CPU Load" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="memory" name="Memory" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="storage" name="Storage" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </WidgetContainer>
            </WidgetGrid>
        </div>
    );
}
