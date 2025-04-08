import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice/users'
import userLogsReducer from './slice/userLogs'
import userNotificationReducer from './slice/userNotification'

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    trace: true,
    reducer: {
        users:usersReducer,
        userLogs: userLogsReducer,
        userNotification: userNotificationReducer,
    },
})

export { store }