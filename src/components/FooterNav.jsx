import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function FooterNav({ previous, next, submitBtnRef, flag }) {
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(flag){
            console.log("Go to next page");  
            navigate(next)
        }
    },[flag])
    function goBack() {
        navigate(previous);
    }
    
    function handleSubmit() {         
        submitBtnRef.current.click()
    }

    function confirmed(){
        navigate(next)
    }

    
    return (
        <div className=" m-auto flex h-full w-full flex-wrap content-center justify-between  md:max-lg:w-[600px] ">
        <button
            className={`rounded-md transition-all bg-transparent p-3 text-neutral-cool-gray ${previous ? "block" : "invisible"} cursor-pointer font-medium hover:bg-neutral-light-gray`}
            onClick={() => {
            goBack();
            }}
        >
            Go Back
        </button>
        <button
            className="cursor-pointer rounded-md bg-primary-marine-blue p-3 font-medium text-neutral-white transition-all hover:bg-primary-purplish-blue"
            onClick={() => {
                next=='/confirmed'?confirmed():handleSubmit()
            }}
        >
            {next=='/confirmed'?"Confirm":"Next Step"}
        </button>
        </div>
    );
}
