import React, { useEffect } from "react";
import FooterNav from "../components/footerNav";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router";

export default function Step4() {
  const navigate=useNavigate();
  const userinfo=useSelector((state)=>state.userInfo.fullname)
  useEffect(()=>{
    if(!userinfo){
      navigate("/")
    }
  },[])
  

  const userplan=useSelector((state)=>state.userInfo.planDetails)
  const useraddons=useSelector((state)=>state.userInfo.addOns)
  let total=userplan.price
  const paymentFreq=userplan.paymentFreq=="Monthly"
  

  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-auto w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
        <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
          Finishing up
        </h1>
        <h2 className="text-neutral-light-gray lg:text-xl">
          Double-check everything looks OK before confirming
        </h2>

        <div className="bg-neutral-magnolia lg:text-xl">
          {/* plan details */}
          <div className="flex justify-between m-4 pb-4 border-b border-b-neutral-light-gray">
            <div>
              <p className="font-bold text-primary-marine-blue">{`${userplan.plan} (${userplan.paymentFreq})`}</p>
              <Link to={"/step2"} className="underline text-neutral-cool-gray hover:text-primary-purplish-blue">Change</Link>
            </div>
            <div className="font-bold my-auto text-primary-marine-blue">
              {`$ ${userplan.price}/${paymentFreq?"mo":"yr"}`}
            </div>
          </div>

          {/* addons */}
          <div className="p-4 text-center text-neutral-cool-gray ">

            {useraddons.length===0?"No addons":useraddons.map((item)=>{
              total+=item.price||0;
              return(
                <div className="flex pb-2 justify-between" key={item.id}>
                  <p className="text-neutral-cool-gray">{item.addon}</p>
                  <p className="text-primary-marine-blue">${item.price}/{paymentFreq?"mo":"yr"}</p>
                </div>
              )
            })}

          </div>
        </div>

        <div className="flex justify-between lg:text-xl p-4">
          <p className="text-neutral-cool-gray">Total ({paymentFreq?"per month":"per year"})</p>
          <p className="text-primary-purplish-blue font-bold text-xl lg:text-2xl">+$ {total}/{paymentFreq?"mo":"yr"}</p>
        </div>

        
      </div>
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
        <FooterNav
          previous={"/step3"}
          next={"/confirmed"}
          // submitBtnRef={submitButtonRef}
          // flag={isSubmitSuccessful}
        />
      </div>
    </div>
  );
}
