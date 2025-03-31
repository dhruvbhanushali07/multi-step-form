import React, { useState, useRef, useEffect } from "react";
import FooterNav from "/src/components/FooterNav";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAddOns } from "../features/userPlanSlice";

export default function Step3() {
  const monthlyaddOns = [
    {
      id: "0",
      addon: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      id: "1",
      addon: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: "2",
      addon: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ];

  const yearlyaddOns = [
    {
      id: "0",
      addon: "Online service",
      desc: "Access to multiplayer games",
      price: 10,
    },
    {
      id: "1",
      addon: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      id: "2",
      addon: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 20,
    },
  ];

  

  const submitButtonRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const watchAddons = watch("addon0");
  const dispatch = useDispatch();
  const pf= useSelector((state)=>state.userInfo.planDetails.paymentFreq)=="Monthly"
  
  const allAddons = useSelector((state) => state.userInfo.addOns);
  const selectedAddons = allAddons.map((item) => {
    return item.id;
  });
  const [mymyaddon, setmymyaddon] = useState(selectedAddons);
  const addOns=pf?monthlyaddOns:yearlyaddOns
  function onsubmit(data) {
    let myAddons = [];
    const datavalues = Object.values(data);
    datavalues.map((item) => {
      if (item) {
        const xyz = (() => {
          return addOns.find((element) => element.id === item);
        })();
        myAddons.push(xyz);
      }
    });
    dispatch(updateAddOns(myAddons));
  }

  // type diff
  useEffect(() => {
    const abc = watch((value) => {
      setmymyaddon(Object.values(value));
    });
  }, [watchAddons]);

  console.log(pf);
  
  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-auto w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-10 lg:drop-shadow-none">
        <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
          Pick add-ons
        </h1>
        <h2 className="text-neutral-cool-gray lg:text-xl">
          Add-ons help enhace your gaming experience
        </h2>

        <form
          className="flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onsubmit)}
        >
          {addOns.map((item, index) => {
            const checked=mymyaddon.includes(`${item.id}`)
            return (
              <label
                key={index}
                className={`grid grid-cols-[0.5fr_2.5fr_1fr] gap-2 rounded-md border p-4 ${checked?"border-primary-purplish-blue bg-primary-purplish-blue/10":"border-neutral-cool-gray"} lg:grid-cols-[0.5fr_2fr_1fr] xl:p-6`}
                htmlFor={item.addon}
              >
                
                  <input
                    {...register(`addon${index}`)}
                    type="checkbox"
                    className="m-auto size-5"
                    id={item.addon}
                    value={item.id}
                    checked={checked}
                  />
                
                <div className="place-content-start ">
                  <h1 className="font-medium text-wrap text-primary-marine-blue lg:text-xl">
                    {item.addon}
                  </h1>
                  <h2 className="text-neutral-cool-gray lg:text-xl">
                    {item.desc}
                  </h2>
                </div>
                <div className="m-auto text-primary-purplish-blue">
                  <p className="lg:text-xl">{`$ ${item.price}/${pf?"mo":"yr"}`}</p>
                </div>
              </label>
            );
          })}
          <button
            ref={submitButtonRef}
            type="submit"
            className="hidden"
          ></button>
        </form>
      </div>
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
        <FooterNav
          previous={"/step2"}
          next={"/step4"}
          submitBtnRef={submitButtonRef}
          flag={isSubmitSuccessful}
        />
      </div>
    </div>
  );
}
