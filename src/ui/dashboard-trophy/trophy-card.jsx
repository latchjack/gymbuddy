import React from 'react';

// import { TrophyIcon } from '@heroicons/react/20/solid';

const TrophyCard = () => {
    return (
        <div
            className={
                'border bg-stone-900 rounded-lg p-4 px-6 relative col-start-1 col-end-3 xl:row-start-3 xl:row-end-5 xl:col-start-1 xl:col-end-3'
            }
            // className="border bg-stone-900 rounded-lg min-w-xl max-w-3xl relative p-4 px-6 row-start-3 row-end-4 col-start-1 col-end-3"
        >
            <p className="text-xl text-indigo-600">Latest Unlock</p>
            <div className="flex gap-2">
                <p>Total Lifted:</p>
                <p>1000kg!</p>
            </div>
            {/* <TrophyIcon
                className="h-36 text-indigo-600 absolute right-12"
                aria-hidden="true"
            /> */}
        </div>
    );
};

export default TrophyCard;

/*
JSON data could be

achievements = [
  {
    goal: '12 tonnes'
    equalToWeight: '7 rhinos'
  },
  {
    goal: '3 tonnes'
    equalToWeight: '32 spider-monkeys'
  }
]

*/
