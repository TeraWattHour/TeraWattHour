import React from "react";
import classes from "../styles/Post.module.css";

export default function PostHeader({ children }: { children: string }) {
  const title: React.RefObject<HTMLDivElement> = React.useRef(null);
  const [diagonal, setDiagonal] = React.useState(0);

  function pythagorean(a: number, b: number) {
    return Math.floor(Math.sqrt(a ** 2 + b ** 2));
  }

  React.useEffect(() => {
    resize();
    function resize() {
      console.log(title.current?.clientWidth);
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
    <div className="flex">
      <div
        ref={title}
        className={classes.title}
        style={{ "--diagonal": diagonal + "px" }}
      >
        {children}
      </div>
    </div>
  );
}
