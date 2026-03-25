import { useState } from "react";
import Lobby from "./components/Lobby";
// import TreeSketch from "./components/TreeSketch";
import TreeSketch from "./components/TreeSketch";

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 ? (
        <Lobby setPage={setPage} />
      ) : (
        <TreeSketch page={page} setPage={setPage} />
      )}
    </>
  );
}

export default App;
