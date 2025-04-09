import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice/users'
import userLogsReducer from './slice/userLogs'
import userNotificationReducer from './slice/userNotification'
import userAccessReducer from './slice/userAccess'
import userAuditReducer from './slice/userAudit'
import userBackupReducer from './slice/userBackup'

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    trace: true,
    reducer: {
        users:usersReducer,
        userLogs: userLogsReducer,
        userNotification: userNotificationReducer,
        userAccess: userAccessReducer,
        userAudit: userAuditReducer,
        userBackup: userBackupReducer,
    },
})

export { store }