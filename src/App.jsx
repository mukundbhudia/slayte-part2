import React from "react";
import "./styles.css";

import Fetch from "./components/Fetch";
import FetchStringify from "./components/FetchStringify";
import FetchBase64Hash from "./components/FetchBase64Hash";

export default function App() {
  return (
    <div className="App">
      <h1>Slayte challenge part 2</h1>
      <Fetch src={"https://air-qual-api.herokuapp.com/"} />
      <br />
      <br />
      <FetchStringify
        src={"https://air-qual-api.herokuapp.com/getStation/?stnId=5724"}
        depth={1}
      />
      <br />
      <br />
      <FetchBase64Hash
        src={"https://air-qual-api.herokuapp.com/getStation/?stnId=9974"}
      />
    </div>
  );
}
