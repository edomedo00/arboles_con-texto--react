import React, { useEffect, useRef } from "react";
import Tree1 from "../sketches/Tree1";
import Tree2 from "../sketches/Tree2";
import Tree3 from "../sketches/Tree3";

interface TreeSketchProps {
  setPage: (page: number) => void;
}

interface Tree3Controls {
  nextCamera: () => void;
  nextSeed: () => void;
}

const TreeSketch: React.FC<TreeSketchProps> = ({ setPage }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const treeControls = useRef<Tree3Controls | null>(null);
  useEffect(() => {
    const header = headerRef.current;
    const controls = controlsRef.current;

    if (!header) return;
    if (!controls) return;

    const timer = setTimeout(() => {
      header.style.animation = "none";
      controls.style.animation = "none";
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tree-main">
      {/* <Tree1 /> */}
      {/* <Tree2 /> */}
      <div className="interface-container">
        <div className="header" ref={headerRef}>
          <button className="btn btn-return" onClick={() => setPage(0)}>
            volver
          </button>
          <div className="top-line--interface"></div>
        </div>
        <div className="interface">
          {/* eslint-disable-next-line */}
          <div className="interface__text">
            {`Nos quedaremos hoy 
            en un hueco oscuro 
            en la médula de un árbol 
            con un ojo que nos cuida
            nada podrá atravesarnos 
            
            los surcos nos arruyan
            el sueño inagotable`}
          </div>
          <div className="interface__controls" ref={controlsRef}>
            <button
              className="btn btn-controls"
              onClick={() => treeControls.current?.nextSeed()}
            >
              regenerar
            </button>
            <button
              className="btn btn-controls"
              onClick={() => treeControls.current?.nextCamera()}
            >
              cambiar vista
            </button>
            <button className="btn btn-controls">avanzar</button>
          </div>
        </div>
        {/* <div className="interface-text"></div> */}
      </div>
      <div className="tree-container">
        <Tree3 onReady={(controls) => (treeControls.current = controls)} />
      </div>
    </div>
  );
};

export default TreeSketch;
