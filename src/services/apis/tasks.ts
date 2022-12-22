import { DeleteTaskInterface } from '@redux/interfaces/TaskInterface'
import { jmsApi } from '../JmsInstance'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`

export const getTasks = async () => {
	const url = baseUrl
	const response = await jmsApi({
		method: 'get',
		url
	})
	return response
}

export const deleteTask = async ({ id }: DeleteTaskInterface) => {
	const url = `${baseUrl}/${id}`
	const response = await jmsApi({
		method: 'delete',
		url
	})
	return response.data
}
