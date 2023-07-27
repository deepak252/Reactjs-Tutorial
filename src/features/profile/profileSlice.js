import {createSlice} from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name : "profile",
    initialState : {
        value : {}
    },
    reducers : {
        setProfile : (state, action)=>{
            state.value = action.payload;
        },
        getProfile : (state)=>{
            
        }
    }
});

export const {setProfile, getProfile} = profileSlice.actions;

export default profileSlice.reducer;

