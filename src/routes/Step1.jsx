import React from "react";
import FooterNav from "../components/footerNav";

export default function Step1() {
    return (
    <div className=" w-full h-4/5 relative">
        <div className="h-[78%] max-w-[500px] rounded-lg absolute left-[50%] translate-x-[-50%] top-[-5%] bg-neutral-white p-8 w-[90%] flex flex-col gap-4 drop-shadow-2xl ">
        <h1 className="text-2xl font-bold text-primary-marine-blue">
          Personal Info
        </h1>
        <h2 className="text-neutral-cool-gray">
          Please provide your name, email address and phone number
        </h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="username"
            className="border border-neutral-cool-gray p-2 rounded-md w-full font-medium"
            type="text"
            placeholder="e.g. Dhruv Bhanushali"
          />
        </div>
        <div>
            <label htmlFor="email">Email Address</label>
            <input
            id="email"
            name="email"
            className="border border-neutral-cool-gray p-2 rounded-md w-full font-medium"
            type="text"
            placeholder="e.g. Dhruv Bhanushali"
            />
        </div>
        <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
            id="phoneNumber"
            name="Phonenumber"
            className="border border-neutral-cool-gray p-2 rounded-md w-full font-medium"
            type="text"
            placeholder="e.g. Dhruv Bhanushali"
            />
        </div>
        </div>
        <div className="w-full h-[12%] absolute bottom-0 bg-neutral-white">
            <FooterNav previous={""} next={"/step2"} />
        </div>
    </div>
    );
}
