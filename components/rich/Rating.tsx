import React from "react";

export default function Rating({ value = 3.5 }) {
  const hidden: React.RefObject<HTMLDivElement> = React.useRef(null);
  const shown: React.RefObject<HTMLDivElement> = React.useRef(null);

  const [ratedWidth, setRatedWidth] = React.useState(0);

  React.useEffect(() => {
    setRatedWidth(shown.current!.clientWidth * (value / 5));
  }, [value]);

  return (
    <div className="relative select-none mt-10 mb-10">
      <div className="flex flex-row items-center">
        <div ref={shown} className="flex flex-row text-2xl space-x-1.5 w-max">
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
        </div>
        <div
          ref={hidden}
          style={{ width: ratedWidth }}
          className="absolute top-0 left-0 overflow-hidden text-blue-600 flex flex-row z-10 text-2xl space-x-1.5"
        >
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
          <div>&#9733;</div>
        </div>
        <span className="ml-3 text-sm">{value} / 5</span>
      </div>
    </div>
  );
}
