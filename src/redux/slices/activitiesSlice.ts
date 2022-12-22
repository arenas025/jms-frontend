import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	deleteActivities,
	getActivities,
	postActivity,
	UpdateActivity
} from 'src/services/apis/activities'
import { CommonInitialState } from 'src/redux/interfaces/CommonInterface'
import {
	GetOneActivityInterface,
	UpdateActivityInterface,
	PostActivityInterface,
	ActivityObjectInterface,
	DeleteActivityInterface
} from '../interfaces/ActivityInterface'

export interface ActivitiesInterfaceState extends CommonInitialState {
	data: ActivityObjectInterface[]
}

export interface InitialStateActivities {
	activities: ActivitiesInterfaceState
}

const initialState: InitialStateActivities = {
	activities: {
		data: [
			{
				id: undefined,
				activity: '',
				role: undefined
			}
		],
		status: 'idle'
	}
}

export const getActivitiesRequest = createAsyncThunk(
	'activities/getActivitiesRequest',
	async (payload: GetOneActivityInterface, { rejectWithValue }) => {
		try {
			const activitiesResponse = await getActivities(payload)
			return activitiesResponse
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response?.data)
		}
	}
)

// export const getOneActivityRequest = createAsyncThunk(
// 	'activities/getOneActivityRequest',
// 	({ id }: GetOneActivityInterface, { rejectWithValue }) => {}
// )

export const deleteActivityRequest = createAsyncThunk(
	'activities/deleteActivityRequest',
	async (payload: DeleteActivityInterface, { rejectWithValue }) => {
		try {
			const response = await deleteActivities(payload)
			return response
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response.data)
		}
	}
)

export const updateActivityRequest = createAsyncThunk(
	'activities/updateActivityRequest',
	async (payload: UpdateActivityInterface, { rejectWithValue }) => {
		try {
			const response = await UpdateActivity(payload)
			return response
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response.data)
		}
	}
)

export const postActivityRequest = createAsyncThunk(
	'activities/postActivityRequest',
	async (payload: PostActivityInterface, { rejectWithValue }) => {
		try {
			const response = await postActivity(payload)
			return response
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response.data)
		}
	}
)

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getActivitiesRequest.fulfilled, (state, { payload }) => {
			state.activities.status = 'success'
			state.activities.data = payload
		})
	}
})

export default activitiesSlice.reducer
// export const {} = activitiesSlice.actions
