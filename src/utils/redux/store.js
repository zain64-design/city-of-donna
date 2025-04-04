import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice/users'

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    trace: true,
    reducer: {
        users:usersReducer
    },
})

export { store }