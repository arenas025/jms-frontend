import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/redux/store'
import { getTasksRequest } from '@redux/slices/tasksSlices'
import { AppDispatch } from '@redux/store'
import { deleteTaskRequest } from '../../src/redux/slices/tasksSlices'

const index = () => {
	const dispatch = useDispatch<AppDispatch>()
	const {
		tasks: { data }
	} = useSelector((state: RootState) => state.tasks)

	useEffect(() => {
		dispatch(getTasksRequest())
	}, [])
	console.log('data', data)

	const [checked, setChecked] = useState<string>('')

	return (
		<div>
			<form>
				{data.map((item) => (
					// eslint-disable-next-line react/jsx-key
					<>
						<label htmlFor={item.name}>{item.name}</label>
						<input
							type="radio"
							key={item.id}
							id={item.id?.toString()}
							name="form"
							onClick={() => {
								setChecked(item.id!.toString())
							}}
						/>
					</>
				))}
			</form>
			<button
				onClick={() => {
					dispatch(deleteTaskRequest({ id: checked }))
				}}
			>
				delete
			</button>
			<button
				onClick={() => {
					dispatch(getTasksRequest())
				}}
			>
				update
			</button>
		</div>
	)
}

export default index
