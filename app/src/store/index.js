import {configureStore} from '@reduxjs/toolkit'
import userRegisterReducer from './userRegister.slice'

const store = configureStore({
    reducer: {
        userRegisterForm: userRegisterReducer
    }
})

export default store