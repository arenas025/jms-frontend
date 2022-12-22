import { TaskObjectInterface } from '@redux/interfaces/TaskInterface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteTask, getTasks } from '@services/apis/tasks'
import { CommonInitialState } from 'src/redux/interfaces/CommonInterface'
import { DeleteTaskInterface } from '../interfaces/TaskInterface'

export interface TasktInterfaceState extends CommonInitialState {
	data: TaskObjectInterface[]
}

export interface InitialStateTasks {
	tasks: TasktInterfaceState
}

const initialState: InitialStateTasks = {
	tasks: {
		data: [
			{
				id: undefined,
				name: '',
				activity_id: undefined,
				started_at: ''
			}
		],
		status: 'idle'
	}
}

export const getTasksRequest = createAsyncThunk(
	'tasks/getTasksRequest',
	async (_, { rejectWithValue }) => {
		try {
			const tasksResponse = await getTasks()
			return tasksResponse
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response.data)
		}
	}
)

export const deleteTaskRequest = createAsyncThunk(
	'tasks/deleteTaskRequest',
	async (payload: DeleteTaskInterface, { rejectWithValue }) => {
		try {
			const response = await deleteTask(payload)
			return response
		} catch (error: any) {
			if (!error.response) {
				throw error
			}
			return rejectWithValue(error.response.data)
		}
	}
)

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getTasksRequest.fulfilled, (state, { payload }) => {
			state.tasks.status = 'success'
			state.tasks.data = payload
		})
	}
})

export default tasksSlice.reducer
