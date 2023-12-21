import { workData, socialsData } from "../data";
import { Project, Social, ProjectProps, SocialProps } from "../components";

export default function Home() {
  const work: ProjectProps[] = workData;
  const socials: SocialProps[] = socialsData;

  return (
    <div className="text-white bg-zinc-800 h-screen w-full font-satoshi">
      <div className="h-5 bg-gray-200 text-center text-zinc-800 font-medium text-sm">
        Welcome
      </div>
      <img
        src="/logo.svg"
        alt="Logo"
        height={30}
        width={30}
        className="fixed right-3 bottom-3"
        aria-hidden
      />
      <div className="flex sm:flex-row flex-col sm:justify-between w-full">
        <h1 className="text-8xl ml-5 tracking-tighter">Anish</h1>

        <span className="font-medium fixed left-3 bottom-3 mix-blend-difference bg-white bg-clip-text text-transparent">
          &#169;2023
        </span>

        <div className="max-w-sm">
          <p className="font-medium text-xs text-left sm:text-right m-5">
            Hi there 👋, I am a student and developer based in India ( 🇮🇳 ). I
            am currently working at{" "}
            <a
              href="https://www.linkedin.com/company/tezucka-tech"
              target="_blank"
              rel="noreferrer"
            >
              Tezucka Tech
            </a>
            . I aspire to be a software developer. Currently only having only 1
            or 2 years of experience in{" "}
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
      </div>

      <div className="p-3 sm:p-5">
        <p className="text-xl tracking-tighter font-medium">/ Works /</p>
        {work.map((e, i) => {
          return <Project key={i} {...e}></Project>;
        })}
        <p className="text-sm font-semibold">
          More Projects &mdash; <span className="italic">Coming soon</span>;
        </p>
      </div>

      <div className="p-3 sm:p-5 flex justify-between sm:flex-row flex-col">
        <div>
          <span className="font-medium">Get in Touch: </span>
          <a
            href="mailto:anishmandalme1234@outlook.com"
            className="font-medium"
            title="I will respond as fast as I can"
          >
            anishmandalme1234@outlook.com
          </a>
        </div>

        <div className="flex">
          {socials.map((e, i) => {
            return <Social name={e.name} link={e.link} key={i}></Social>;
          })}
        </div>
      </div>
    </div>
  );
}
