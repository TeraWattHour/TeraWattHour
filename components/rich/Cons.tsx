import React from "react";

export default function Cons({ value }) {
  return (
    <div>
      <div className="-mb-1.5">Cons</div>
      <ul className="list-none pl-2">
        {value.map((x, i) => (
          <li key={i}>
            <span className="mr-2 font-bold text-red-600">-</span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
