import React from "react";
import { Link, useNavigate } from "react-router";

export default function FooterNav({ previous, next }) {
    const navigate = useNavigate();

    function goBack() {
    navigate(previous);
    }
    function goToNext() {
    navigate(next);
    }
    return (
    <div className="m-auto flex h-full w-full md:max-lg:w-[600px] lg:p-16 flex-wrap content-center justify-between p-4">
        <button
        className={`rounded-md bg-transparent p-3 text-neutral-cool-gray ${previous ? "block" : "invisible"}`}
        onClick={() => {
            goBack();
        }}
        >
        Go Back
        </button>
        <button
        className="rounded-md bg-primary-marine-blue p-3 text-neutral-white"
        onClick={() => {
            goToNext();
        }}
        >
        Next Step
        </button>
    </div>
    );
}
