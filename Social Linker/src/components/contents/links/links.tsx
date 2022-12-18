import "./links.scss";

interface Props {
  icon: string;
  text: string;
  link: string;
}

export default function Links({ icon, text, link }: Props) {
  const url = new URL("/icons/" + icon + ".svg", import.meta.url).href;
  console.log(url);

  return (
    <a className="link_container" href={link}>
      <img src={url} alt="" className="link_image" />
      <div className="links">
        <div className="link_text">{text}</div>
      </div>
    </a>
  );
}
