import React from "react";
import classes from "../styles/Error.module.css";

export default function NotFound({ children }: { children: string }) {
  const title: React.RefObject<HTMLHeadingElement> = React.useRef(null);
  const [diagonal, setDiagonal] = React.useState(0);

  function pythagorean(a: number, b: number) {
    return Math.floor(Math.sqrt(a ** 2 + b ** 2));
  }

  React.useEffect(() => {
    resize();
    function resize() {
      if (!title.current) return;
      setDiagonal(
        pythagorean(title.current.clientWidth, title.current.clientHeight)
      );
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="h-96 flex items-center justify-center">
      <h1
        ref={title}
        className={classes.title}
        style={{ "--diagonal": diagonal + "px" }}
      >
        404 - Page Not Found
      </h1>
    </div>
  );
}
