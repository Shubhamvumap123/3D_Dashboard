import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface WidgetContainerProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function WidgetContainer({ title, icon, children, className, delay = 0 }: WidgetContainerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
            className={clsx(
                "glass-card p-6 flex flex-col relative overflow-hidden group",
                className
            )}
        >
            {/* Subtle hover gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-sky-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center justify-between mb-4 z-10 relative">
                <div className="flex items-center gap-3">
                    {icon && <div className="text-blue-400">{icon}</div>}
                    <h3 className="text-lg font-semibold tracking-wide text-slate-100">{title}</h3>
                </div>
            </div>

            <div className="flex-1 w-full h-full relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

export function WidgetGrid({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", className)}>
            {children}
        </div>
    );
}
