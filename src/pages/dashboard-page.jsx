import React from 'react';
import LastWorkoutCard from '../ui/dashboard-last-workout/last-workout-card';
import PersonalRecordCard from '../ui/dashboard-record/personal-record-card';
import TrophyCard from '../ui/dashboard-trophy/trophy-card';
import WorkoutTodayCard from '../ui/dashboard-workout/todays-workout-card';
import Layout from '../ui/layout/layout';

function DashboardPage() {
    const borderStyles = 'border bg-stone-900 rounded-lg p-4 px-6 relative';
    const mobileLayout = 'gap-2 grid-cols-2 grid-rows-4';
    const tabletLayout = 'gap-3 grid-cols-2 grid-rows-4';
    const desktopLayout = 'xl:gap-4 xl:grid-cols-4 xl:grid-rows-3';
    return (
        <Layout>
            <div
                className={
                    'grid border border-blue-700 gap-2 grid-cols-2 grid-rows-4 xl:gap-4 xl:grid-cols-4 xl:grid-rows-3'
                }
                // className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-3 gap-4"
            >
                <WorkoutTodayCard borderStyles={borderStyles} />
                <TrophyCard borderStyles={borderStyles} />
                <PersonalRecordCard borderStyles={borderStyles} />
                <LastWorkoutCard borderStyles={borderStyles} />
            </div>
        </Layout>
    );
}

export default DashboardPage;
