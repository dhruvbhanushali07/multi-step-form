import { createSlice } from "@reduxjs/toolkit";

const initial={
        fullname:"",
        email:"",
        contact:"",
        planDetails:{
            planName:"Arcade",
            planPrice:9,
            paymentFreq:"Monthly"
        }
}
const userInfoSlice=createSlice({
    name:"userInfo",
    initialState:initial,
    reducers:{
        updateName:(state,action)=>{state.fullname=action.payload},
        updateEmail:(state,action)=>{state.email=action.payload},
        updateContact:(state,action)=>{state.contact=action.payload},
        updatePlan:(state,action)=>{state.planDetails=action.payload},
    }
})

export const {updateName,updateEmail,updateContact,updatePlan}=userInfoSlice.actions
export default userInfoSlice.reducer;