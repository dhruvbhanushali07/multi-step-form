import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../features/userPlanSlice'; 
const store = configureStore({
    reducer: {
        userInfo: userInfoReducer, 
    },
});

export default store