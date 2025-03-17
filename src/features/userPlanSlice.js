import { createSlice } from "@reduxjs/toolkit";

const initial={
    userDetails:{
        fullname:"",
        email:"",
        contact:""
    },
}
const userInfoSlice=createSlice({
    name:"userInfo",
    initialState:initial,
    reducers:{
        updateName:(state,action)=>{state.userDetails.fullname=action.payload},
        updateEmail:(state,action)=>{state.userDetails.email=action.payload},
        updateContact:(state,action)=>{state.userDetails.contact=action.payload},
    }
})

export const {updateName,updateEmail,updateContact}=userInfoSlice.actions
export default userInfoSlice.reducer;