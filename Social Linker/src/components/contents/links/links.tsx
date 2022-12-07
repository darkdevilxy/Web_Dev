import "./links.scss";

interface Props {
  icon: string;
  text: string;
  link: string;
  key: number;
}

export default function Links({ icon, text, link, key }: Props) {
  return (
    <div className="link_container">
      <img src={icon} alt="" className="link_image" />
      <a className="link" href={link}>
        <div className="link_text">{text}</div>
      </a>
    </div>
  );
}
