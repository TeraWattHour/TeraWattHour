import React from "react";

export default function Pros({ value }) {
  return (
    <div>
      <div className="-mb-1.5">Pros</div>
      <ul className="list-none pl-2">
        {value.map((x, i) => (
          <li key={i}>
            <span className="mr-2 font-bold text-green-600">+</span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
