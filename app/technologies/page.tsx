import ImageLoader from './ImageLoader';

export default function technologies() {
  return (
    <>
      <main className="container mx-auto max-width pt-10 pb-20 ">
        <section>
          <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Tech Stack
          </h1>
          <p className="text-content py-2 lg:max-w-3xl">
            Technologies I&#39;ve been working
            with recently
          </p>
        </section>
        <ImageLoader />
      </main>
    </>
  );
}
