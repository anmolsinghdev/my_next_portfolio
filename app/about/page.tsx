import { eduDetails, workDetails } from '@/Details';
import Work from '@/components/Work/Work';
import React from 'react';

export default function page() {
  return (
    <>
      <main className="container mx-auto max-width pt-10 pb-20 ">
        <section className="section-1">
          <h1 className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            About Me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            I’m a software engineer specializing in building and occasionally
            designing exceptional digital experiences. Currently, I’m focused on
            building website at Chetu Inc.
          </p>
        </section>
        <section>
          <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Work Experience
          </h1>
          <div>
            {React.Children.toArray(
              workDetails.map(
                ({ Position, Company, Location, Type, Duration }) => (
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                )
              )
            )}
          </div>
        </section>
        <section>
          <h1 className="text-2xl pt-10 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Education
          </h1>
          <div>
            {React.Children.toArray(
              eduDetails.map(
                ({ Position, Company, Location, Type, Duration }) => (
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                  />
                )
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}
