import React, { useEffect } from "react";
import FooterNav from "/src/components/FooterNav";
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
    <div className="relative flex flex-col justify-between h-4/5 w-full lg:h-full">
      <div className="content-box">
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
      <div className="mx-auto h-[12%] w-[90%] bg-neutral-white">
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
