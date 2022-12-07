import { useEffect } from "react";
import "./_contents.scss";
import Links from "./links/links";

import mock_data from "./../../assets/Mock_Data/MOCK_DATA.json";

export default function Contents() {
  return (
    <div className="contents">
      {mock_data.map((data) => {
        return (
          <Links
            key={data.id}
            icon={data.Icon}
            text={data.Title}
            link={data.Url}
          />
        );
      })}
    </div>
  );
}
