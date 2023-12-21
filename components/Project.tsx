export interface ProjectProps {
  title: string;
  details: string;
  link: string;
}

export default function Project(props: ProjectProps) {
  return (
    <a
      className="w-full h-20 flex border-t border-b justify-between items-center cursor-pointer group no-underline mb-2 hover:p-5 transition-all"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col">
        <span className="font-semibold sm:text-2xl">{props.title}</span>
        <span className="font-medium text-xs">{props.details}</span>
      </div>

      <img
        src="/arrow.svg"
        alt="New Tab"
        height={50}
        width={50}
        className="group-hover:-rotate-45 transition-transform"
      />
    </a>
  );
}
