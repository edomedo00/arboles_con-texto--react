import React from "react";
import LobbyText from "./LobbyText";
import LobbyPlant from "./LobbyPlant";

interface LobbyProps {
  setPage: (page: number) => void;
}

const Lobby: React.FC<LobbyProps> = ({ setPage }) => {
  return (
    <>
      <span className="top-line"></span>
      <LobbyText />
      <LobbyPlant setPage={setPage} />
      <span className="bottom-line"></span>
    </>
  );
};

export default Lobby;
