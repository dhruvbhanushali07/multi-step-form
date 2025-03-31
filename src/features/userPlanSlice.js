import { createSlice } from "@reduxjs/toolkit";

const initial={
        fullname:"",
        email:"",
        contact:"",
        planDetails:{
            id:0,
            plan:"Arcade",
            price:9,
            paymentFreq:"Monthly"
        },
        addOns:[]
}
const userInfoSlice=createSlice({
    name:"userInfo",
    initialState:initial,
    reducers:{
        updateName:(state,action)=>{state.fullname=action.payload},
        updateEmail:(state,action)=>{state.email=action.payload},
        updateContact:(state,action)=>{state.contact=action.payload},
        updatePlan:(state,action)=>{state.planDetails=action.payload},
        updateAddOns:(state,action)=>{state.addOns=action.payload}
    }
})

export const {updateName,updateEmail,updateContact,updatePlan,updateAddOns}=userInfoSlice.actions
export default userInfoSlice.reducer;