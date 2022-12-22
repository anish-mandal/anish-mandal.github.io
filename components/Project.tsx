import Image from "next/image";

export interface ProjectProps {
  title: string;
  details: string;
  link: string;
}

export default function Project(props: ProjectProps) {
  return (
    <a
      className="w-full h-28 flex border-t-2 border-b-2 font-inter justify-between items-center mt-3 mb-3 cursor-pointer group no-underline"
      href={props.link}
    >
      <div className="flex flex-col">
        <span className="text-xl font-bold font-script sm:text-2xl">
          {props.title}
        </span>
        <span className="">{props.details}</span>
      </div>

      <Image
        src="/arrow.svg"
        alt="New Tab"
        height={50}
        width={50}
        className="group-hover:-rotate-45 transition-transform"
      />
    </a>
  );
}
