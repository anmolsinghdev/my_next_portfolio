import React from 'react';
import Location from '@/public/assets/svgs/location.svg';
import Company from '@/public/assets/svgs/company.svg';
import Image from 'next/image';
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
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5 gap-1">
            <Image src={Company} title="Company" alt="" />
            <p className="text-content text-xs md:text-sm pl-1">{company}</p>
          </div>
          <div className="flex items-center">
            <p className="text-content text-xs flex gap-1 md:text-sm pl-1">
              <Image
                src={Location}
                title="Loction"
                alt=""
                className="dark:fill-white"
              />
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
