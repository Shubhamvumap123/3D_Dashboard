import React from 'react';
import { WidgetGrid, WidgetContainer } from '../components/WidgetGrid';
import { Box, Activity, Users, FileText } from 'lucide-react';

import ThreeDViewerWidget from '../components/widgets/ThreeDViewerWidget';
import AnalyticsWidget from '../components/widgets/AnalyticsWidget';
import ActivityFeedWidget from '../components/widgets/ActivityFeedWidget';
import KPICardsWidget from '../components/widgets/KPICardsWidget';

export default function DashboardHome() {
    return (
        <div className="h-full w-full flex flex-col gap-8 pb-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">Overview Dashboard</h1>
                    <p className="text-slate-400 mt-2 font-light text-lg">Your unified interface for 3D collaborative workflows.</p>
                </div>
            </div>

            <WidgetGrid>
                <WidgetContainer title="3D Part Viewer" icon={<Box />} className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px]" delay={0.1}>
                    <ThreeDViewerWidget />
                </WidgetContainer>

                <WidgetContainer title="System Activity" icon={<Activity />} className="col-span-1 md:col-span-1 lg:col-span-2 min-h-[400px]" delay={0.2}>
                    <AnalyticsWidget />
                </WidgetContainer>

                <WidgetContainer title="Team Collaboration" icon={<Users />} className="col-span-1 md:col-span-1 lg:col-span-1 min-h-[300px]" delay={0.3}>
                    <ActivityFeedWidget />
                </WidgetContainer>

                <WidgetContainer title="Active Projects" icon={<FileText />} className="col-span-1 md:col-span-1 xl:col-span-3 min-h-[300px]" delay={0.4}>
                    <KPICardsWidget />
                </WidgetContainer>
            </WidgetGrid>
        </div>
    );
}
