import React, { useState } from "react";
import FooterNav from "../components/footerNav";

export default function Step2() {
  const plans = [
    {
      plan: "Arcade",
      icon: "./images/icon-arcade.svg",
    },
    {
      plan: "Advanced",
      icon: "./images/icon-advanced.svg",
    },
    {
      plan: "Pro",
      icon: "./images/icon-pro.svg",
    },
  ];

  const [currentPlan, setcurrentPlan] = useState();
  const monthlyPrice = ["$9/mo", "$12/mo", "$15/mo"];
  const yearlyPrice = ["$90/yr", "$120/yr", "$150/yr"];

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const planpricing = !isOn ? monthlyPrice : yearlyPrice;
  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-auto w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
        <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
          Select your plan
        </h1>
        <h2 className="text-neutral-cool-gray lg:text-xl">
          You have the option of monthly or yearly billing.
        </h2>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
          {plans.map((item, index) => {
            const isChecked = item.plan === currentPlan;
            return (
              <div
                className={`rounded-lg border-2 p-4 hover:border-primary-purplish-blue lg:h-[15rem] lg:w-[30%] ${isChecked ? "border-primary-purplish-blue bg-primary-purplish-blue/5" : "border-neutral-light-gray bg-neutral-white"}`}
                key={index}
              >
                <input
                  type="radio"
                  className="hidden"
                  name="plan"
                  id={item.plan}
                  value={item.plan}
                  onChange={(e) => setcurrentPlan(e.target.value)}
                />
                <label
                  className="flex h-full w-full flex-wrap content-center gap-4 lg:flex-col lg:content-start lg:justify-around"
                  htmlFor={item.plan}
                >
                  <div className="planicon">
                    <img src={item.icon} alt="logo" />
                  </div>
                  <div>
                    <h1 className="text-xl font-medium text-primary-marine-blue">
                      {item.plan}
                    </h1>
                    <h2 className="text-xl text-neutral-cool-gray">
                      {planpricing[index]}
                    </h2>
                    <h2
                      className={`font-medium text-primary-marine-blue ${isOn ? "block" : "hidden"}`}
                    >
                      2 months free
                    </h2>
                  </div>
                </label>
              </div>
            );
          })}
        </div>

        <div className="flex w-full flex-wrap content-center justify-center gap-4 rounded-md bg-neutral-magnolia p-2">
          <h1
            className={`${!isOn ? "font-medium text-primary-marine-blue" : "text-neutral-cool-gray"}`}
          >
            Monthly
          </h1>
          <div>
            <div
              className={`flex h-5 w-10 cursor-pointer items-center rounded-full p-1 ${
                isOn ? "bg-primary-marine-blue" : "bg-gray-400"
              }`}
              onClick={toggleSwitch}
            >
              <div
                className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ${
                  isOn ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>
          </div>
          <h1
            className={`${isOn ? "font-medium text-primary-marine-blue" : "text-neutral-cool-gray"}`}
          >
            Yearly
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
        <FooterNav previous={"/"} next={"/step3"} />
      </div>
    </div>
  );
}
