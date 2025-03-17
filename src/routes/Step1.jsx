import React, { useEffect, useRef } from "react";
import FooterNav from "../components/footerNav";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'
import { updateContact, updateEmail, updateName } from "../features/userPlanSlice";

export default function Step1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitSuccessful },
  } = useForm();
  
  const submitButtonRef=useRef()
  const dispatch=useDispatch()
    const onSubmit = (data) => {
      dispatch(updateName(data.username))
      dispatch(updateEmail(data.usermail))
      dispatch(updateContact(data.userphonenumber))
      console.log(data);
    }
    
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email) || "Invalid email address";
  };
  // const formData=watch()
  return (
    <div className="relative h-4/5 w-full lg:h-full">
      <div className="absolute top-[-8%] left-[50%] flex h-[78%] w-[92%] translate-x-[-50%] flex-col gap-4 rounded-lg bg-neutral-white p-8 drop-shadow-xl md:w-[600px] lg:static lg:w-full lg:translate-x-0 lg:gap-6 lg:p-16 lg:drop-shadow-none">
        <h1 className="text-2xl font-bold text-primary-marine-blue lg:text-4xl">
          Personal Info
        </h1>
        <h2 className="text-neutral-cool-gray lg:text-xl">
          Please provide your name, email address and phone number
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 lg:text-xl">
            <div className="flex w-full justify-between">
              <label htmlFor="name" className="text-primary-marine-blue">
                Name
              </label>
              <span className="text-primary-Strawberry-red">
                {errors.username?.message}
              </span>
            </div>
            <input
              id="name"
              {...register("username", { required: "This field is Required" })}
              className={`w-full rounded-md border p-2 font-medium focus:outline-primary-marine-blue ${errors.username ? "border-primary-Strawberry-red" : "border-neutral-cool-gray"}`}
              type="text"
              placeholder="e.g. Dhruv Bhanushali"
            />
          </div>
          <div className="mb-4 lg:text-xl">
            <div className="flex w-full justify-between">
              <label htmlFor="email" className="text-primary-marine-blue">
                Email Address
              </label>
              <span className="text-primary-Strawberry-red">
                {errors.usermail?.message}
              </span>
            </div>
            <input
              id="email"
              {...register("usermail", {
                required: "This field is Required",
                validate: validateEmail,
              })}
              className={`w-full rounded-md border p-2 font-medium focus:outline-primary-marine-blue ${errors.usermail ? "border-primary-Strawberry-red" : "border-neutral-cool-gray"}`}
              type="email"
              placeholder="e.g. dhruvbhanushali@mail.com"
            />
          </div>
          <div className="mb-4 lg:text-xl">
            <div className="flex w-full justify-between">
              <label htmlFor="phoneNumber" className="text-primary-marine-blue">
                Phone Number
              </label>
              <span className="text-primary-Strawberry-red">
                {errors.userphonenumber?.message}
              </span>
            </div>
            <input
              id="phoneNumber"
              {...register("userphonenumber", {
                required: "This field is Required",
                maxLength: {
                  value: 10,
                  message: "Invalid Number",
                },
                minLength: {
                  value: 10,
                  message: "Invalid Number",
                },
              })}
              className={`w-full rounded-md border p-2 font-medium focus:outline-primary-marine-blue ${errors.userphonenumber ? "border-primary-Strawberry-red" : "border-neutral-cool-gray"}`}
              type="number"
              placeholder="e.g. 73919 27819"
            />
          </div>
          <button type="submit" ref={submitButtonRef}></button>
        </form>
      </div>
      <div className="absolute bottom-0 h-[12%] w-full bg-neutral-white">
        <FooterNav previous={""} next={"/step2"} submitBtnRef={submitButtonRef} flag={isSubmitSuccessful}/>
      </div>
    </div>
  );
}
