import React from 'react';
// import { BoltSlashIcon } from '@heroicons/react/20/solid';

// TODO: make the height double of pr and unlock cards
// TODO: turn workout dl into component and make it easier to read via ui

const LastWorkoutCard = () => {
    // line-clamp-3
    return (
        <div
            className="bg-purple-600 border rounded-lg relative p-4 px-6 col-start-1 col-end-3 xl:row-start-2 xl:row-end-5 xl:col-start-3 xl:col-end-5"
            // className="bg-purple-600 border border-stone-800 rounded-lg min-w-xl max-w-3xl relative p-4 px-6 xl:row-start-2 xl:row-end-7 col-start-3 col-end-7"
        >
            <div>
                <p className="text-xl text-indigo-600">
                    Last Workout Completed
                </p>
            </div>
            <dl className="list-none ">
                <li className="text-sm flex gap-3">
                    <span>Bench</span>|<span>5 x 3</span>
                </li>
                <li className="text-sm flex gap-3">
                    <span>Tricep Extension</span>|<span>5 x 3</span>
                </li>
                <li className="text-sm flex gap-3">
                    <span>Chest Fly</span>|<span>5 x 3</span>
                </li>
                <li className="text-sm flex gap-3">
                    <span>Skull crushers</span>|<span>5 x 3</span>
                </li>
                <li className="text-sm flex gap-3">
                    <span>Dips</span>|<span>5 x 3</span>
                </li>
                <li className="text-sm flex gap-3">
                    <span>Barbell Pullover</span>|<span>5 x 3</span>
                </li>
            </dl>
            {/* <div>
                <BoltSlashIcon
                    className="h-36 text-indigo-600 absolute right-12 dark:text-gray-400"
                    aria-hidden="true"
                />
            </div> */}
        </div>
    );
};

export default LastWorkoutCard;
