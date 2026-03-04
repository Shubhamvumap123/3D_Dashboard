import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Clock, TrendingUp } from 'lucide-react';

const metrics = [
    { label: 'System Efficiency', value: '98.4%', trend: '+2.1%', icon: Zap, color: 'text-amber-400' },
    { label: 'Active Projects', value: '142', trend: '+12', icon: Target, color: 'text-blue-400' },
    { label: 'Avg Render Time', value: '1.2s', trend: '-0.3s', icon: Clock, color: 'text-emerald-400' },
    { label: 'Total Output', value: '1.2M', trend: '+15%', icon: TrendingUp, color: 'text-purple-400' },
];

export default function KPICardsWidget() {
    return (
        <div className="w-full h-full min-h-[200px] grid grid-cols-2 gap-4">
            {metrics.map((metric, i) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-slate-800/30 rounded-xl p-4 border border-white/5 flex flex-col justify-between hover:bg-slate-800/60 transition-colors"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm font-medium">{metric.label}</span>
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="text-2xl font-bold text-slate-100">{metric.value}</span>
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                            {metric.trend}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
