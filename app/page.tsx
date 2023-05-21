'use client';
export default function Home() {
  return (
    <>
      <main className="container mx-auto max-width section md:flex justify-center items-center">
        <div>
          <h1 className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            {'Anmol Singh'}
          </h1>
          <h2 className="custom-width text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Web Developer
          </h2>
        </div>
      </main>
    </>
  );
}
