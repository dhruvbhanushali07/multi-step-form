import React,{useeff} from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function Step5() {
  const navigate=useNavigate();
  const userinfo=useSelector((state)=>state.userInfo.fullname)
  useEffect(()=>{
    if(!userinfo){
      navigate("/")
    }
  },[])
  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex justify-center flex-wrap content-center h-full max-h-[80%] w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
        <img src="/images/icon-thank-you.svg" alt="confirmation-icon" />
        <h1 className="text-2xl font-bold text-primary-marine-blue text-center lg:text-4xl">
          Thank you!
        </h1>
        <h2 className="text-neutral-cool-gray text-center lg:w-4/5 lg:text-xl">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </h2>
      </div>
    </div>
  );
}
