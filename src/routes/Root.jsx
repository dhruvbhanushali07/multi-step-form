import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="flex h-screen w-screen flex-wrap content-center justify-center bg-neutral-magnolia font-ubuntu">
      <div className="main flex h-full w-full flex-col rounded-2xl bg-neutral-white lg:h-4/5 lg:w-4/5 lg:flex-row lg:p-4 xl:w-3/5 lg:shadow-2xl">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
