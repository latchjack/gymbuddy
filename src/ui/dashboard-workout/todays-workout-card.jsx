import React from 'react';
import { BoltIcon } from '@heroicons/react/20/solid';

// TODO: make the height double of pr and unlock cards
const WorkoutTodayCard = () => {
  return (
    <div className="border border-purple-600 rounded-lg min-w-xl max-w-3xl h-52 relative">
      Today's workout card
      <div></div>
      <div></div>
      <BoltIcon
        className="h-36 text-indigo-600 absolute right-12"
        aria-hidden="true"
      />
    </div>
  );
};

export default WorkoutTodayCard;