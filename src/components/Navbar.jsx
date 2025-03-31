import React from "react";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex h-1/5 w-full flex-wrap content-start justify-center gap-4 bg-[url(/public/images/bg-sidebar-mobile.svg)] bg-cover p-4 lg:h-full lg:w-2/5 lg:flex-col lg:content-center lg:justify-start lg:gap-8 lg:rounded-2xl lg:bg-[url(/public/images/bg-sidebar-desktop.svg)] lg:pt-10">
      <div className="flex pointer-events-none flex-wrap gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-full border-2 px-4 py-2 text-xl ${
              isActive
                ? "border-transparent bg-primary-Pastel-blue text-primary-marine-blue"
                : "border-white text-white"
            }`
          }
        >
          1
        </NavLink>

        <div className="hidden flex-col text-neutral-white lg:flex">
          <p>STEP 1</p>
          <p className="font-medium">YOUR INFO</p>
        </div>
      </div>

      <div className="flex pointer-events-none flex-wrap gap-4">
        <NavLink
          to="/step2"
          className={({ isActive }) =>
            `rounded-full border-2 px-4 py-2 text-xl ${
              isActive
                ? "border-transparent bg-primary-Pastel-blue text-primary-marine-blue"
                : "border-white text-white"
            }`
          }
        >
          2
        </NavLink>

        <div className="hidden flex-col text-neutral-white lg:flex">
          <p>STEP 2</p>
          <p className="font-medium">SELECT PLAN</p>
        </div>
      </div>

      <div className="flex pointer-events-none flex-wrap gap-4">
        <NavLink
          to="/step3"
          className={({ isActive }) =>
            `rounded-full border-2 px-4 py-2 text-xl ${
              isActive
                ? "border-transparent bg-primary-Pastel-blue text-primary-marine-blue"
                : "border-white text-white"
            }`
          }
        >
          3
        </NavLink>

        <div className="hidden flex-col text-neutral-white lg:flex">
          <p>STEP 3</p>
          <p className="font-medium">ADD-ONS</p>
        </div>
      </div>

      <div className="flex pointer-events-none  flex-wrap gap-4">
        <NavLink
          to="/step4"
          className={({ isActive }) =>
            `rounded-full border-2 px-4 py-2 text-xl ${
              isActive
                ? "border-transparent bg-primary-Pastel-blue text-primary-marine-blue"
                : "border-white text-white"
            }`
          }
        >
          4
        </NavLink>

        <div className="hidden flex-col text-neutral-white lg:flex">
          <p>STEP 4</p>
          <p className="font-medium">SUMMARY</p>
        </div>
      </div>
    </div>
  );
}
