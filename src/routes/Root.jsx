import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="flex flex-wrap justify-center content-center font-ubuntu bg-neutral-magnolia">
      <div className="main w-screen h-screen ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
