import React, { useState, useRef, useEffect } from "react";
import FooterNav from "/src/components/FooterNav";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatePlan } from "../features/userPlanSlice";
export default function Step2() {
  // An array of monthly plans
  const monthlyplans = [
    {
      id: 0,
      plan: "Arcade",
      paymentFreq: "Monthly",
      price: 9,
    },
    {
      id: 1,
      plan: "Advanced",
      paymentFreq: "Monthly",
      price: 12,
    },
    {
      id: 2,
      plan: "Pro",
      paymentFreq: "Monthly",
      price: 15,
    },
  ];

  // An array of yearly plans
  const yearlyplans = [
    {
      id: 0,
      plan: "Arcade",
      paymentFreq: "Yearly",
      price: 90,
    },
    {
      id: 1,
      plan: "Advanced",
      paymentFreq: "Yearly",
      price: 120,
    },
    {
      id: 2,
      plan: "Pro",
      paymentFreq: "Yearly",
      price: 150,
    },
  ];

  // Array of plans Icons
  const planIcons = [
    "./images/icon-arcade.svg",
    "./images/icon-advanced.svg",
    "./images/icon-pro.svg",
  ];

  const dispatch = useDispatch();
  const currentStatePlan = useSelector((state) => state.userInfo.planDetails);

  const [currentPlan, setcurrentPlan] = useState(currentStatePlan.id);
  const [isOn, setIsOn] = useState(currentStatePlan.paymentFreq == "Yearly" ? true : false);
  const plans = !isOn ? monthlyplans : yearlyplans;
  const submitButtonRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const watchPlan = watch("userplan");

  const onSubmit = (data) => {
    const planid = parseInt(data.userplan);
    const newplan = (() => {
      return plans.find((element) => element.id === planid);
    })();

    dispatch(updatePlan(newplan));
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      value = parseInt(value.userplan);
      setcurrentPlan(value);
    });
    return () => subscription.unsubscribe();
  }, [watchPlan]);

  return (
    <div className="relative flex flex-col justify-between h-4/5 w-full lg:h-full">
      <div className="content-box">
        <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
          Select your plan
        </h1>
        <h2 className="text-neutral-cool-gray lg:text-xl">
          You have the option of monthly or yearly billing.
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 lg:flex-row lg:justify-between"
        >
          {plans.map((item, index) => {
            return (
              <div className={`lg:h-[15rem] lg:w-[30%]`} key={index}>
                <input
                  type="radio"
                  className="peer hidden"
                  {...register("userplan")}
                  id={item.plan}
                  checked={currentPlan == index ? true : false}
                  value={item.id}
                />
                <label
                  className="flex h-full w-full flex-wrap content-center gap-4 rounded-lg border-2 border-neutral-cool-gray p-4 peer-checked:border-primary-purplish-blue peer-checked:bg-primary-purplish-blue/10 hover:border-primary-purplish-blue lg:flex-col lg:content-start lg:justify-around"
                  htmlFor={item.plan}
                >
                  <div className="planicon">
                    <img src={planIcons[index]} alt="logo" />
                  </div>
                  <div>
                    <h1 className="font-medium text-primary-marine-blue lg:text-xl">
                      {item.plan}
                    </h1>
                    <h2 className="text-neutral-cool-gray lg:text-xl">
                      {`$ ${item.price}/ ${isOn ? "yr" : "mo"}`}
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
          <button
            ref={submitButtonRef}
            type="submit"
            className="hidden"
          ></button>
        </form>

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
      <div className="mx-auto  h-[12%] w-[90%] bg-neutral-white">
        <FooterNav
          previous={"/"}
          next={"/step3"}
          submitBtnRef={submitButtonRef}
          flag={isSubmitSuccessful}
        />
      </div>
    </div>
  );
}
