import { useState } from "react";
import Lobby from "./components/Lobby";

function App() {
  const [page, setPage] = useState(0);

  return <>{page === 0 ? <Lobby setPage={setPage} /> : <></>}</>;
}

export default App;
