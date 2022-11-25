import React from 'react';
import { BoltIcon } from '@heroicons/react/20/solid';

// TODO: make the height double of pr and unlock cards
const WorkoutTodayCard = () => {
  return (
    <div className="border border-purple-600 rounded-lg min-w-xl max-w-3xl h-52 relative  p-4 px-6">
      <p className="text-xl text-indigo-600">Today's workout card</p>
      <div>
        <p>Its: Leg Day!</p>
        <ul>
          <li className="text-sm flex gap-3">
            <span>Squat</span>|<span>5 x 3</span>
          </li>
          <li className="text-sm flex gap-3">
            <span>Leg Press</span>|<span>5 x 3</span>
          </li>
          <li className="text-sm flex gap-3">
            <span>Goblet Squat</span>|<span>5 x 3</span>
          </li>
          <li className="text-sm flex gap-3">
            <span>Ham Curl</span>|<span>5 x 3</span>
          </li>
          <li className="text-sm flex gap-3">
            <span>Leg Extension</span>|<span>5 x 3</span>
          </li>
        </ul>
      </div>
      <div></div>
      <BoltIcon
        className="h-36 text-indigo-600 absolute right-12"
        aria-hidden="true"
      />
    </div>
  );
};

export default WorkoutTodayCard;
