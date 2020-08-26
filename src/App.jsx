import React from "react";
import "./styles.css";
// Just one component but passing in different props
import Fetch from "./components/Fetch";

export default function App() {
  return (
    <div className="App">
      <h1>Slayte challenge part 2</h1>
      <Fetch src="https://air-qual-api.herokuapp.com/" />
      <br />
      <br />
      <Fetch
        src="https://air-qual-api.herokuapp.com/getStation/?stnId=5724"
        depth={1}
      />
      <br />
      <br />
      <Fetch
        src="https://air-qual-api.herokuapp.com/getStation/?stnId=9974"
        encoding="base64"
      />
    </div>
  );
}
