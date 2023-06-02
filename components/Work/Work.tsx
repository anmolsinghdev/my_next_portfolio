import React from 'react';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';

interface IWork {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
}

function Work({ position, company, location, type, duration }: IWork) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content font-normal  md:text-lg lg:text-xl">
          {position}
        </h1>
        <div className="btn bg-gray-200 text-black-text dark:text-dark-heading text-xs font-semibold inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col gap-2 md:flex-row sm:gap-2">
          <div className="flex items-center pr-5 gap-1">
            <HiOutlineBuildingOffice2 className="dark:text-whit" size={18} />
            <p className="text-content text-xs md:text-sm">{company}</p>
          </div>
          <div className="flex items-center">
            <p className="text-content text-xs flex gap-1 md:text-sm pl-1">
              <IoLocationOutline className="dark:text-whit" size={18} />
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm pl-1 min-w-fit">
          {duration}
        </p>
      </div>
    </article>
  );
}

export default Work;
