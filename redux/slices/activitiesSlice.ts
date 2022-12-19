import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getActivities } from '@services/apis/activities'

const initialState = {
	activities: [{}]
}

export const getActivitiesRequest = createAsyncThunk(
	'activities/getActivitiesRequest',
	async (_, { rejectWithValue }) => {
		try {
			const inventoryResponse = await getActivities()
			return inventoryResponse
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response?.data)
		}
	}
)

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getActivitiesRequest.fulfilled, (state, { payload }) => {
			state.activities = payload
		})
		// .addCase(getCategoryRequest.fulfilled, (state, { payload }) => {
		// 	state.category.status = 'success'
		// 	state.category.data = payload
		// })
	}
})

export default activitiesSlice.reducer
// export const {} = activitiesSlice.actions
