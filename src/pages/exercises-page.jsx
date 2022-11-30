import React from 'react';
import Layout from '../ui/layout/layout';
import ExerciseCard from '../ui/exercises-card/exercise-card';
import exercises from '../utilities/exercises';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const ExercisesPage = () => {
    const getExercises = async () => {
        const resultList = pb.collection('exercises').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someFiled1 != someField2'
        });
        console.log(resultList);
        return resultList;
    };

    getExercises();

    return (
        <>
            <Layout>
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {exercises.map((exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))}
                </ul>
            </Layout>
        </>
    );
};

export default ExercisesPage;
