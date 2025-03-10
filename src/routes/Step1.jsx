import React from "react";
import FooterNav from "../components/footerNav";

export default function Step1() {
  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-[78%] w-[92%] md:w-[600px] translate-x-[-50%] flex-col gap-4 lg:gap-8 rounded-lg bg-neutral-white p-8 lg:p-16 drop-shadow-xl lg:static lg:w-full lg:translate-x-0 lg:drop-shadow-none ">
        <h1 className="text-2xl lg:text-4xl font-bold text-primary-marine-blue">
          Personal Info
        </h1>
        <h2 className="text-neutral-cool-gray lg:text-xl">
          Please provide your name, email address and phone number
        </h2>
        <div className="lg:text-xl">
          <label htmlFor="name" >Name</label>
          <input
            id="name"
            name="username"
            className="w-full rounded-md border border-neutral-cool-gray p-2 font-medium"
            type="text"
            placeholder="e.g. Dhruv Bhanushali"
          />
        </div>
        <div className="lg:text-xl">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            className="w-full rounded-md border border-neutral-cool-gray p-2 font-medium"
            type="text"
            placeholder="e.g. Dhruv Bhanushali"
          />
        </div>
        <div className="lg:text-xl">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="Phonenumber"
            className="w-full rounded-md border border-neutral-cool-gray p-2 font-medium"
            type="number"
            placeholder="e.g. Dhruv Bhanushali"
          />
        </div>
      </div>
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
        <FooterNav previous={""} next={"/step2"} />
      </div>
    </div>
  );
}
