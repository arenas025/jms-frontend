import { jmsApi } from '../JmsInstance'
import {
	DeleteActivityInterface,
	GetOneActivityInterface,
	PostActivityInterface,
	UpdateActivityInterface
} from '@redux/interfaces/ActivityInterface'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/activities`

export const getActivities = async ({ id }: GetOneActivityInterface) => {
	const url = id ? `${baseUrl}/${id}` : baseUrl
	const response = await jmsApi({
		method: 'get',
		url
	})
	return response
}

export const deleteActivities = async ({ id }: DeleteActivityInterface) => {
	const url = `${baseUrl}/${id}`
	const response = await jmsApi({
		method: 'delete',
		url
	})
	return response.data
}

export const postActivity = async ({
	activity,
	role
}: PostActivityInterface) => {
	const url = baseUrl
	const data = {
		activity,
		role
	}
	const response = await jmsApi({
		method: 'post',
		url,
		data
	})
	return response.data
}

export const UpdateActivity = async ({
	id,
	activity,
	role
}: UpdateActivityInterface) => {
	const url = `${baseUrl}/${id}`
	const data = {
		activity,
		role
	}
	const response = await jmsApi({
		method: 'patch',
		url,
		data
	})
	return response.data
}
