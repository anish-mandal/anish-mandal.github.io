import Image from "next/image";

export interface SocialProps {
  link: string;
  image: string;
  height: number;
  width: number;
  alt: string;
}

export default function Social(props: SocialProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="after:hidden m-5"
    >
      <Image
        src={props.image}
        height={props.height}
        width={props.width}
        alt={props.alt}
      ></Image>
    </a>
  );
}
