import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import activitiesReducer from './slices/activitiesSlice'
import tasksReducer from './slices/tasksSlices'
export const store = configureStore({
	reducer: {
		activities: activitiesReducer,
		tasks: tasksReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
