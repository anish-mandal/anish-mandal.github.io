// import Welcome from "../components/Welcome";
import { workData, socialsData } from "../data";
import { Project, Social } from "../components";
import { ProjectProps } from "../components/Project";
import { SocialProps } from "../components/Social";
import { Gradient } from "../utils/Gradient";
import Head from "next/head";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    const gradient = new Gradient();

    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  let work: ProjectProps[] = workData;
  let socials: SocialProps[] = socialsData;

  return (
    <div className="text-white relative">
      {/* Head */}
      <Head>
        <title>Anish - Home</title>
      </Head>

      {/* Background */}
      <canvas
        id="gradient-canvas"
        data-transition-in
        className="fixed top-0 left-0 h-screen w-full -z-10"
      />

      {/* Information */}
      <div className="w-full h-screen flex justify-center items-center flex-col relative">
        <picture>
          <source srcSet="/logo.svg" type="image/svg" />
          <img
            src="/logo.svg"
            alt="Logo"
            height={30}
            width={30}
            className="absolute top-5 left-5"
            aria-hidden
          />
        </picture>
        <p className="m-5 sm:w-3/6 font-inter sm:text-2xl text-center">
          Hi there 👋, I am <span className="font-script">Anish Mandal</span>. I
          am a student (👦) and developer (👨‍💻) based in India (🇮🇳). I am
          currently working at{" "}
          <a href="https://tezucka.xyz" target="_blank" rel="noreferrer">
            Tezucka Tech
          </a>
          . I aspire to be a software developer. Currently only having only 1 or
          2 years of experience in{" "}
          <a
            href="https://github.com/anish-mandal"
            target="_blank"
            rel="noreferrer"
          >
            various technologies
          </a>
          .
        </p>
      </div>

      {/* Work */}
      <div className="p-5 sm:p-10">
        <p className="font-inter text-3xl">My Works</p>
        {work.map((e, i) => {
          return <Project key={i} {...e}></Project>;
        })}
        <p>I am still working on more and more projects to show here 😄.</p>
      </div>

      {/* Footer */}
      <div className="sm:h-56 h-60 flex sm:flex-row flex-col text-center sm:justify-between justify-evenly items-center">
        <div className="sm:ml-10">
          <p className="font-script text-4xl sm:text-6xl pb-5">Get in touch</p>
          <a
            href="mailto:anishmandalme1234@outlook.com"
            className="font-inter sm:text-2xl"
            title="I will respond as fast as I can"
          >
            anishmandalme1234@outlook.com
          </a>
        </div>

        <div className="flex justify-center items-center sm:mr-5">
          {socials.map((e, i) => {
            return <Social {...e} key={i}></Social>;
          })}
        </div>
      </div>

      <p className="font-inter w-full text-center p-5">
        Website designed and developed by Anish Mandal.
      </p>
    </div>
  );
}
