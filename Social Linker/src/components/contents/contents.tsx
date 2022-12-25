import "./_contents.scss";
import Links from "./links/links";

import { Link, Route, Routes } from "react-router-dom";

const link_data = await fetch("/src/data/links.json").then((res) => res.json());

interface LinkData {
  id: number;
  Icon: string;
  Title: string;
  URL: string;
}

export default function Contents() {
  return (
    <div className="wrapper_class">
      <div className="tab_container">
        <Link className="tabs" to="/links">
          Links
        </Link>
        <Link className="tabs" to={"/about"}>
          About Me
        </Link>
      </div>
      <div className="contents">
        <Routes>
          <Route path="/links" element={<LinksContainer />} />
        </Routes>
      </div>
    </div>
  );
}

function LinksContainer() {
  return (
    <>
      {link_data.map((data: LinkData) => {
        return (
          <Links
            key={data.id}
            icon={data.Icon}
            text={data.Title}
            link={data.URL}
          />
        );
      })}
    </>
  );
}
