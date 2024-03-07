import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        businessName: '',
        role: '',
        username: '',
        email: '',
        password: '',
    }

}

const userRegisterSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        updateUserRegisterForm: (state, action) => {
            return{
                ...state,
                user: action.payload
            }
        }
    }

})


export const {updateUserRegisterForm} = userRegisterSlice.actions

export default userRegisterSlice.reducer