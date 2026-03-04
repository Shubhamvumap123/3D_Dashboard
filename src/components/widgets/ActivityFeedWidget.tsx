import React from 'react';
import { motion } from 'framer-motion';

const activities = [
    { id: 1, user: 'Sarah Jenkins', action: 'updated the', target: 'Engine Block Assembly', time: '10m ago', avatar: 'bg-emerald-500' },
    { id: 2, user: 'Alex Chen', action: 'commented on', target: 'Aerodynamics Simulation', time: '1h ago', avatar: 'bg-blue-500' },
    { id: 3, user: 'System', action: 'completed render for', target: 'V8 Prototype', time: '2h ago', avatar: 'bg-purple-500' },
    { id: 4, user: 'Maria Garcia', action: 'uploaded new iteration of', target: 'Chassis Model', time: '4h ago', avatar: 'bg-rose-500' },
];

export default function ActivityFeedWidget() {
    return (
        <div className="w-full h-full min-h-[250px] flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
            {activities.map((activity, index) => (
                <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex gap-4 items-start p-3 rounded-xl hover:bg-slate-800/50 transition-colors group cursor-pointer border border-transparent hover:border-white/5"
                >
                    <div className={`w-10 h-10 rounded-full ${activity.avatar} flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                        {activity.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-300 truncate">
                            <span className="font-medium text-slate-100">{activity.user}</span>{' '}
                            <span className="text-slate-400">{activity.action}</span>{' '}
                            <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{activity.target}</span>
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
