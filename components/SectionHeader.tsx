import React, { useRef } from "react";
import classNames from "../lib/classNames";

import classes from "../styles/SectionHeader.module.css";

export default function SectionHeader({ children }: { children: string }) {
  const h3: React.RefObject<HTMLHeadingElement> = useRef(null);
  const [diagonal, setDiagonal] = React.useState(0);

  function pythagorean(a: number, b: number) {
    return Math.floor(Math.sqrt(a ** 2 + b ** 2));
  }
  React.useEffect(() => {
    resize();
    function resize() {
      if (!h3.current) return;
      setDiagonal(pythagorean(h3.current.clientWidth, h3.current.clientHeight));
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <h3
        ref={h3}
        className={classes.h3}
        style={{ "--diagonal": diagonal + "px" }}
      >
        {children}
      </h3>
    </div>
  );
}
