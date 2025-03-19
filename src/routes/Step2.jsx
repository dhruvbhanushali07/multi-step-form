import React, { useState, useRef, useEffect } from "react";
import FooterNav from "../components/footerNav";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
import { updatePlan } from "../features/userPlanSlice";
export default function Step2() {
  const monthlyplans = [
    {
      plan: "Arcade",
      paymentFreq: "Monthly",
      price: 9,
    },
    {
      plan: "Advanced",
      paymentFreq: "Monthly",
      price: 12,
    },
    {
      plan: "Pro",
      paymentFreq: "Monthly",
      price: 15,
    },
  ];

  const yearlyplans = [
    {
      plan: "Arcade",
      paymentFreq: "Yearly",
      price: 90,
    },
    {
      plan: "Advanced",
      paymentFreq: "Yearly",
      price: 120,
    },
    {
      plan: "Pro",
      paymentFreq: "Yearly",
      price: 150,
    },
  ];

  const planIcons = [
    "./images/icon-arcade.svg",
    "./images/icon-advanced.svg",
    "./images/icon-pro.svg",
  ];

  const dispatch=useDispatch();
  const cp=useSelector((state)=>state.userInfo.planDetails.planName);
  
  const [currentPlan, setcurrentPlan] = useState(cp);
  const [isOn, setIsOn] = useState(false);
  const plans = !isOn ? monthlyplans : yearlyplans;
  const submitButtonRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const watchPlan=watch("userplan")
  const onSubmit = (data) => {
    data=data.userplan?.split(",")
    let currentp={
      planName:data?.[0],
      planPrice:parseInt(data?.[1]),
      paymentFreq:data?.[2]
    }
    console.log(currentp);
    
    dispatch(updatePlan(currentp))
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  useEffect(()=>{
    const subscription = watch((value) => 
    {
      console.log(value);
      value=value.userplan?.split(",")
      setcurrentPlan(value[0])
      console.log(value,value[0]);
      
    });
    return () => subscription.unsubscribe();
  },[watchPlan])

  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-auto w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
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
              <div
                className={`rounded-lg border-2 hover:border-primary-purplish-blue lg:h-[15rem] lg:w-[30%] `}
                key={index}
              >
                <input
                  type="radio"
                  className="hidden peer"
                  {...register("userplan")}
                  id={item.plan}
                  checked={currentPlan==item.plan?true:false}
                  value={[item.plan,item.price,item.paymentFreq]}
                />
                <label
                  className="flex h-full w-full p-4 flex-wrap content-center gap-4 lg:flex-col lg:content-start lg:justify-around peer-checked:bg-primary-purplish-blue/10 peer-checked:border-primary-purplish-blue"
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
                      {`$ ${item.price}/ ${isOn?"yr":"mo"}`}
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
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
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
