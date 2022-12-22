// 'use client'
import React, {
	FormEvent,
	MouseEvent,
	useEffect,
	useRef,
	useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from 'src/redux/store'
import { ActivityObjectInterface } from '../../src/redux/interfaces/ActivityInterface'
import {
	postActivityRequest,
	updateActivityRequest,
	deleteActivityRequest,
	getActivitiesRequest
} from '@redux/slices/activitiesSlice'
import {
	PostActivityInterface,
	UpdateActivityInterface
} from '@redux/interfaces/ActivityInterface'

const index = () => {
	const dispatch = useDispatch<AppDispatch>()

	const {
		activities: { data, status }
	} = useSelector((state: RootState) => state.activities)

	const [activities, setActivities] = useState<ActivityObjectInterface[]>([])

	useEffect(() => {
		dispatch(getActivitiesRequest({}))
	}, [])

	useEffect(() => {
		setActivities(data)
	}, [status, data])
	const [selected, setSelected] = useState<string>()

	const formRef = useRef<HTMLFormElement>(null)

	const handleCreateActivity = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = new FormData(formRef.current!)
		const role = form.get('role')
		const activity = form.get('activity')
		const newActivity: PostActivityInterface = {
			activity: activity!,
			role: role!
		}
		dispatch(postActivityRequest(newActivity))
	}

	const handleUpdateActivity = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const form = new FormData(formRef.current!)
		const role = form.get('role')
		const activity = form.get('activity')
		const id = selected!
		const updatedActivity: UpdateActivityInterface = {
			id,
			activity,
			role
		}
		const arrayUpdatedActivity = Object.entries(updatedActivity).filter(
			(item) => item[1] !== ''
		)
		const updatedObject = Object.fromEntries(arrayUpdatedActivity)
		dispatch(updateActivityRequest(updatedObject as UpdateActivityInterface))
	}

	const handleGetLocation = () => {
		if (!('geolocation' in navigator)) {
			return alert(
				'your navigator does not have geolocation, please try it in another navigator'
			)
		}
		const onUbication = (ubication: any) => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			console.log(ubication)
			console.log('hola')
		}

		const onError = (error: any) => {
			console.log('error', error)
		}

		const options = {
			enableHighAccuracy: true,
			maximumAge: 0,
			timeout: 5000
		}
		navigator.geolocation.getCurrentPosition(onUbication, onError, options)
	}

	return (
		<>
			{activities.map((item) => (
				<div
					onClick={() => {
						setSelected(item.id!.toString())
					}}
					key={item.id}
				>
					{item.role}
					{item.id}
					{item.activity}
				</div>
			))}
			<button
				onClick={() => {
					dispatch(deleteActivityRequest({ id: selected! }))
				}}
			>
				eliminar
			</button>
			<button
				onClick={() => {
					dispatch(getActivitiesRequest({}))
				}}
			>
				actualizar
			</button>
			<button
				onClick={(e) => handleUpdateActivity(e)}
			>{`actualizar item ${selected!}`}</button>
			<form
				onSubmit={(e) => handleCreateActivity(e)}
				ref={formRef}
				method="post"
			>
				<input type="text" name="activity" placeholder="activity" />
				<input type="text" name="role" placeholder="role" />
				<button type="submit">create</button>
			</form>
			<button
				onClick={() => {
					setActivities(
						activities.filter((item) => item.id === parseInt(selected!))
					)
				}}
			>
				{' '}
				{`get information about ${selected!} `}{' '}
			</button>
			<button onClick={() => handleGetLocation()}>get location</button>
		</>
	)
}

export default index
