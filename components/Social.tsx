export interface SocialProps {
  link: string;
  name: string;
}

export default function Social(props: SocialProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="after:hidden mr-1"
    >
      <span>{props.name}, </span>
    </a>
  );
}
