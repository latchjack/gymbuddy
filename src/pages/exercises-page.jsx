import React from 'react';
import Layout from '../ui/layout/layout';

import { StarIcon, PlusCircleIcon } from '@heroicons/react/20/solid';

const exercises = [
  {
    id: 1,
    name: 'Bench Press',
    title: 'Chest, Triceps',
    role: 'Weights',
    email: 'janecooper@example.com',
    favourite: false,
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Press Up',
    title: 'Chest, Triceps',
    role: 'Calisthenics',
    email: 'janecooper@example.com',
    favourite: true,
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Squat',
    title: 'Quads, Hamstrings, Glutes, Core',
    role: 'Weights/Calisthenics', // todo: get this to be able to handle arrays in a 'Tag' component
    email: 'janecooper@example.com',
    favourite: true,
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 4,
    name: 'Deadlift',
    title: 'Lats, Traps, Core, Quads, Hams, Glutes',
    role: 'Weights', // todo: get this to be able to handle arrays in a 'Tag' component
    email: 'janecooper@example.com',
    favourite: true,
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
  // More exercises...
];

const ExercisesPage = () => {
  return (
    <>
      <Layout>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {exercises.map((exercise) => (
            <li
              key={exercise.id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {exercise.name}
                    </h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {exercise.role}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {exercise.title}
                  </p>
                </div>
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={exercise.imageUrl}
                  alt=""
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${exercise.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <PlusCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Add to a Workout</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${exercise.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <StarIcon
                        className={
                          exercise.favourite
                            ? 'h-5 w-5 text-yellow-400'
                            : 'h-5 w-5 text-gray-400'
                        }
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        {exercise.favourite ? 'Favourite' : 'Add to Favourites'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default ExercisesPage;
