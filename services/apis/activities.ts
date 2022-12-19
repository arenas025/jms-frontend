import { jmsApi } from '../JmsInstance'

const baseUrl = 'http://localhost:3000/api/activities'

export const getActivities = async () => {
	const url = baseUrl
	const response = await jmsApi({
		method: 'get',
		url
	})
	return response.data
}
