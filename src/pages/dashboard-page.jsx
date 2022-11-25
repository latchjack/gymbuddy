import React from 'react';
import LastWorkoutCard from '../ui/dashboard-last-workout/last-workout-card';
import PersonalRecordCard from '../ui/dashboard-record/personal-record-card';
import TrophyCard from '../ui/dashboard-trophy/trophy-card';
import WorkoutTodayCard from '../ui/dashboard-workout/todays-workout-card';
import Layout from '../ui/layout/layout';

function DashboardPage() {
    return (
        <Layout>
            <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-3 gap-4">
                <WorkoutTodayCard />
                <TrophyCard />
                <PersonalRecordCard />
                <LastWorkoutCard />
            </div>
        </Layout>
    );
}

export default DashboardPage;
