import "./_contents.scss";
import Links from "./links/links";

import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import link_data from "/src/data/links.json";

export default function Contents() {
  return (
    <div className="wrapper_class">
      <div className="taber">
        <button className="tabs">
          <Link to="/links">Links</Link>
        </button>
        <button className="tabs">
          <Link to={"/contents"}>Contents</Link>
        </button>
        <button className="tabs">
          <Link to={"/projects"}>Projects</Link>
        </button>
      </div>
      <div className="contents">
        <Routes>
          <Route path="/links" element={<LinksContainer />} />
          {/* <Route path="/contents" element={<ContentsContainer />} />
          <Route path="/projects" element={<ProjectsContainer />} /> */}
        </Routes>
      </div>
    </div>
  );
}

function LinksContainer() {
  return (
    <>
      {link_data.map((data: link_data) => {
        console.log(data);
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
