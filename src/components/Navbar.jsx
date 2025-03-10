import React from 'react';
import { NavLink } from 'react-router';

export default function Navbar(){
    return(
    <div className='w-full bg-[url(/public/images/bg-sidebar-mobile.svg)] bg-cover h-1/5 flex flex-wrap content-center justify-center gap-4'>
        <NavLink
            to="/"
            className={({isActive})=>`text-xl rounded-full border border-white py-2 px-4 
                ${isActive?"text-primary-marine-blue bg-primary-Pastel-blue border-0":"text-white"}`}
        >
            1
        </NavLink>
        <NavLink
            to="/"
            className={({isActive})=>`text-xl rounded-full border border-white py-2 px-4 
                ${isActive?"text-primary-marine-blue bg-primary-Pastel-blue border-0":"text-white"}`}
        >
            2
        </NavLink>
        <NavLink
            to="/"
            className={({isActive})=>`text-xl rounded-full border border-white py-2 px-4 
                ${isActive?"text-primary-marine-blue bg-primary-Pastel-blue border-0":"text-white"}`}
        >
            3
        </NavLink>
        <NavLink
            to="/"
            className={({isActive})=>`text-xl rounded-full border border-white py-2 px-4 
                ${isActive?"text-primary-marine-blue bg-primary-Pastel-blue border-0":"text-white"}`}
        >
            4
        </NavLink>
        
    </div>
    )
}