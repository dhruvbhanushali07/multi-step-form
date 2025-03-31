import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import {Provider} from 'react-redux';
import store from '../store/store.js'

export default function Root() {
  return (
    <Provider store={store}>
    <div className="flex h-screen w-screen flex-wrap content-center justify-center bg-neutral-magnolia font-ubuntu">
      <div className="main flex h-full w-full flex-col lg:rounded-2xl bg-neutral-white lg:h-4/5 lg:w-4/5 lg:flex-row lg:p-4 xl:w-[70%] lg:shadow-2xl">
        <Navbar />
        <Outlet />
      </div>
    </div>
    </Provider>
  );
}
