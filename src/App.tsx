// import { useState } from "react";

import LobbyPlant from "./components/LobbyPlant";
import LobbyText from "./components/LobbyText";

function App() {
  return (
    <>
      <span className="top-line"></span>
      <LobbyText />

      <LobbyPlant />
      <span className="bottom-line"></span>
    </>
  );
}

export default App;
