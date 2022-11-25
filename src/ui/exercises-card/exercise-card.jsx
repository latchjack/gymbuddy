import React from 'react';

import { StarIcon, PlusCircleIcon } from '@heroicons/react/20/solid';

const ExerciseCard = ({ exercise }) => {
  return (
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
              {exercise.type}
            </span>
          </div>

          <p className="mt-1 truncate text-sm text-gray-500">
            {exercise.target}
          </p>
        </div>
        {/* <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={exercise.imageUrl}
          alt=""
        /> */}
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
  );
};

export default ExerciseCard;
