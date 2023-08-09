export default function projects() {
  return (
    <>
      <main className="container mx-auto max-width pt-10 mb-20">
        <section>
          <h1 className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            <div className="mt-4 font-bold">Comming Soon...</div>
            {/* {React.Children.toArray(
        projectDetails.map(
          ({ title, image, description, techstack, previewLink, githubLink }) => (
            <Project
              title={title}
              image={image}
              description={description}
              techstack={techstack}
              previewLink={previewLink}
              githubLink={githubLink}
            />
          )
        )
      )} */}
          </div>
        </section>
      </main>
    </>
  );
}
