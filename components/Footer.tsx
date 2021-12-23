import React from "react";

export default function Footer() {
  return (
    <div className="mx-auto text-center max-w-screen-sm px-4 pb-14 text-gray-500 mt-14">
      <small>
        &copy; {new Date().getUTCFullYear()} TeraWattHour. All rights reserved.
      </small>
    </div>
  );
}
