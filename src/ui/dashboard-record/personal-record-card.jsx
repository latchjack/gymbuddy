import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

const PersonalRecordCard = () => {
  return (
    <div className="border border-red-600 rounded-lg min-w-xl max-w-3xl h-52 relative  p-4 px-6">
      <p className="text-xl text-indigo-600">Most Recent Personal Record</p>
      <div></div>
      <div></div>
      <RocketLaunchIcon
        className="h-36 text-indigo-600 absolute right-12"
        aria-hidden="true"
      />
    </div>
  );
};

export default PersonalRecordCard;
