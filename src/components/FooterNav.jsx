import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function FooterNav({previous, next}){
    const navigate=useNavigate();

    function goBack(){
        navigate(previous)
    }
    function goToNext(){
        navigate(next)
    }
    return(
        <div className='w-full max-w-[500px] m-auto h-full flex flex-wrap content-center justify-between p-4  '>
            <button className={`bg-transparent text-neutral-cool-gray p-3 rounded-md ${previous?"block":"invisible"}`}
            onClick={()=>{
                goBack()
            }}>
                Go Back
            </button>
            <button className='bg-primary-marine-blue text-neutral-white p-3 rounded-md'
            onClick={()=>{
                goToNext()
            }}>
                Next Step
            </button>
        </div>
    )
}