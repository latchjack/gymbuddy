import React from 'react';
import { BoltSlashIcon } from '@heroicons/react/20/solid';

// TODO: make the height double of pr and unlock cards
const LastWorkoutCard = () => {
  return (
    <div className="border border-purple-600 rounded-lg min-w-xl max-w-3xl h-52 relative ">
      Last workout card
      <div></div>
      <div></div>
      <BoltSlashIcon
        className="h-36 text-indigo-600 absolute right-12 dark:text-gray-400"
        aria-hidden="true"
      />
    </div>
  );
};

export default LastWorkoutCard;
