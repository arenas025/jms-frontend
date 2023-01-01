import { jmsApi } from '../JmsInstance'
const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL!}/personal`

export const getPersonal = async () => {
	const url = baseUrl
	const response = await jmsApi({
		method: 'get',
		url
	})
	return response
}
