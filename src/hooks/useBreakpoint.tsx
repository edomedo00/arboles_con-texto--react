// hooks/useBreakpoint.ts
import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 600) setBreakpoint("phone");
      else if (w <= 900) setBreakpoint("tab-port");
      else if (w <= 1200) setBreakpoint("tab-land");
      else setBreakpoint("desktop");
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
