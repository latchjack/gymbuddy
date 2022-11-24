import React from 'react';

import { TrophyIcon } from '@heroicons/react/20/solid';

const TrophyCard = () => {
  return (
    <div className="border border-stone-900 rounded-lg min-w-xl max-w-3xl h-52 relative">
      Last unlock
      <div></div>
      <div></div>
      <TrophyIcon
        className="h-36 text-indigo-600 absolute right-12"
        aria-hidden="true"
      />
    </div>
  );
};

export default TrophyCard;
