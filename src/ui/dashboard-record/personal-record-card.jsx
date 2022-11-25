import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

const PersonalRecordCard = () => {
  return (
    <div className="border border-red-600 rounded-lg min-w-xl max-w-3xl h-52 relative  p-4 px-6">
      <p className="text-xl text-indigo-600">Most Recent Personal Records</p>
      <ul>
        <li className="text-sm flex gap-3">
          <span>Bench Press</span>|<span>80kg</span>|<span>5 x 3</span>
        </li>
        <li className="text-sm flex gap-3">
          <span>Squat</span>|<span>120kg</span>|<span>5 x 3</span>
        </li>
        <li className="text-sm flex gap-3">
          <span>Dead Lift</span>|<span>130kg</span>|<span>5 x 3</span>
        </li>
      </ul>
      <div></div>
      <RocketLaunchIcon
        className="h-36 text-indigo-600 absolute right-12"
        aria-hidden="true"
      />
    </div>
  );
};

export default PersonalRecordCard;
