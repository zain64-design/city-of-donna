import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice/users'
import userLogsReducer from './slice/userLogs'
import userNotificationReducer from './slice/userNotification'
import userAccessReducer from './slice/userAccess'
import userAuditReducer from './slice/userAudit'
import userBackupReducer from './slice/userBackup'
import userGuideReducer from './slice/userGuide'
import userErrorLogReducer from './slice/userErrorLogs'
import userStatsReducer from './slice/userStats'
import userActivitiesReducer from './slice/userActivities'
import userIncidentReducer from './slice/userIncident'
import userCrashStatsReducer from './slice/userCrashStats'
import userLocationReducer from './slice/userLocation'
import userSliderReducer from './slice/userSlider'

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
        userGuide: userGuideReducer,
        userErrorLogs: userErrorLogReducer,
        userStats: userStatsReducer,
        userActivities: userActivitiesReducer,
        userIncident: userIncidentReducer,
        userCrashStats: userCrashStatsReducer,
        userLocation: userLocationReducer,
        userSlider: userSliderReducer
    },
})

export { store }