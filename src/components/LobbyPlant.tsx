import React from "react";
import LobbyPlantSketch from "../sketches/LobbyPlantSketch";

interface LobbyPlantProps {
  setPage: (page: number) => void;
}

const LobbyPlant: React.FC<LobbyPlantProps> = ({ setPage }) => {
  return (
    <div className="lobby-right">
      <div className="plant-container">
        <LobbyPlantSketch />
      </div>
      <div className="start">
        <button className="btn btn-start" onClick={() => setPage(1)}>
          comenzar
        </button>
      </div>
    </div>
  );
};

export default LobbyPlant;
