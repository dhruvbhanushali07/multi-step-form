import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function FooterNav({ previous, next, submitBtnRef,errors, flag }) {
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(flag){
            navigate(next)
        }
    },[flag])
    function goBack() {
        navigate(previous);
    }
    
    function handleSubmit() {
        submitBtnRef.current.click()
    }

    
    return (
        <div className="m-auto flex h-full w-full flex-wrap content-center justify-between p-4 md:max-lg:w-[600px] lg:px-16">
        <button
            className={`rounded-md bg-transparent p-3 text-neutral-cool-gray ${previous ? "block" : "invisible"} cursor-pointer font-medium hover:bg-neutral-light-gray`}
            onClick={() => {
            goBack();
            }}
        >
            Go Back
        </button>
        <button
            className="cursor-pointer rounded-md bg-primary-marine-blue p-3 font-medium text-neutral-white transition-all hover:bg-primary-purplish-blue"
            onClick={() => {
            handleSubmit();
            }}
        >
            Next Step
        </button>
        </div>
    );
}
