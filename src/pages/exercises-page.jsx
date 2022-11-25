import React from 'react';
import Layout from '../ui/layout/layout';
import ExerciseCard from '../ui/exercises-card/exercise-card';
import exercises from '../utilities/exercises';

const ExercisesPage = () => {
    return (
        <>
            <Layout>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {exercises.map((exercise) => (
                        <ExerciseCard key={exercise.key} exercise={exercise} />
                    ))}
                </ul>
            </Layout>
        </>
    );
};

export default ExercisesPage;
