'use client'

import Image from "next/image";
import { techStackDetails } from "@/Details";
import { useContext } from "react";
import { ThemeContext } from "../layout";
export default function technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    express,
    nextjs,
    npm,
    postman,
    nodejs,
    mongodb,
    nextjsWhite,
    nodeJsWhite,
    mongoDBWhite,
    githubWhite,
    htmlWhite,
    cssWhite
  } = techStackDetails;
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <main className="container mx-auto max-width pt-10 pb-20 ">
        <section>
          <h1 className="text-2xl  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Tech Stack
          </h1>
          <p className="text-content py-2 lg:max-w-3xl">
            Technologies I&#39;ve been working with recently
          </p>
        </section>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <Image src={toggleTheme ? htmlWhite : html} title="html" alt="" loading="lazy" />
          <Image src={toggleTheme ? cssWhite : css} title="CSS" alt="" loading="lazy" />
          <Image src={js} title="JavaScript" alt="" loading="lazy" />
          <Image src={react} title="React" alt="" loading="lazy" />
          <Image src={toggleTheme ? nextjsWhite : nextjs} title="NextJS" alt="" loading="lazy" />
          <Image src={redux} title="Redux" alt="" loading="lazy" />
          <Image src={bootstrap} title="Bootstrap" alt="" loading="lazy" />
          <Image src={tailwind} title="Tailwind CSS" alt="" loading="lazy" />
          <Image src={sass} title="SASS" alt="" height={80} width={80} loading="lazy" />
          <Image src={toggleTheme ? nodeJsWhite : nodejs} title="NODEJS" alt="" loading="lazy" />
          <Image src={express} title="Express" alt="" loading="lazy" />
          <Image src={toggleTheme ? mongoDBWhite : mongodb} title="NODEJS" alt="" loading="lazy" />
        </section>
        <section>
          <h1 className="text-2xl pt-10 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Tools
          </h1>
        </section>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <Image src={vscode} title="Visual Studio Code" alt="" />
          <Image src={git} title="Git" alt="Git" />
          <Image src={toggleTheme ? githubWhite : github} title="Github" alt="Github" />
          <Image src={npm} title="NPM" alt="NPM" />
          <Image src={postman} title="Postman" alt="Postman" />
        </section>
      </main>
    </>
  );
}
