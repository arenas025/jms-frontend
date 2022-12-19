import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store'
import { getActivitiesRequest } from '@redux/slices/activitiesSlice'

// interface Activity {
// 	id: number
// 	activity: string
// 	role: string
// }

const index = () => {
	const { activities } = useSelector((state: RootState) => state.activities)
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		dispatch(getActivitiesRequest()).catch((resp) => console.log('resp', resp))
	}, [])

	console.log('activities', activities)
	return <div className="prueba"></div>
}

export default index
