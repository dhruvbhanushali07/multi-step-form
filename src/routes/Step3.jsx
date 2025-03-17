import React from "react";
import FooterNav from "../components/footerNav";

export default function Step3() {
    const addOns = [
        {
        addon: "Online service",
        desc: "Access to multiplayer games",
        price: "+$1/mo",
        },
        {
        addon: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price: "+$2/mo",
        },
        {
        addon: "Customizable profile",
        desc: "Custom theme on your profile",
        price: "+$2/mo",
        },
    ];
    return (
        <div className="relative h-4/5 w-full lg:h-full">
        <div className="absolute top-[-8%] left-[50%] flex h-auto w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
            <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
            Pick add-ons
            </h1>
            <h2 className="text-neutral-cool-gray lg:text-xl">
            Add-ons help enhace your gaming experience
            </h2>

            <div className="flex w-full flex-col gap-2">
            {addOns.map((item, index) => {
                return (
                <label
                    key={index}
                    className={`grid grid-cols-[0.5fr_2.5fr_1fr] gap-2 rounded-md border p-4 lg:grid-cols-[0.5fr_2fr_1fr] lg:p-6`}
                    htmlFor={item.addon}
                >
                    <div className="m-auto">
                    <input
                        type="checkbox"
                        className="size-5"
                        name="addon"
                        id={item.addon}
                    />
                    </div>
                    <div className="place-content-start">
                    <h1 className="text-xl font-medium text-wrap text-primary-marine-blue">
                        {item.addon}
                    </h1>
                    <h2 className="text-xl text-neutral-cool-gray">
                        {item.desc}
                    </h2>
                    </div>
                    <div className="m-auto text-primary-purplish-blue">
                    <p className="text-xl">{item.price}</p>
                    </div>
                </label>
                );
            })}
            </div>
        </div>
        <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
            <FooterNav previous={"/step2"} next={"/step4"} />
        </div>
        </div>
    );
}
