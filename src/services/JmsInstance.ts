import axios from 'axios'

export const jmsApi = axios.create({
	timeout: 100
})

jmsApi.interceptors.response.use(
	(response) => {
		if (
			Boolean(response.data) &&
			response.headers['content-type']!.includes('application/json')
		) {
			return response.data
		}
		return response
	},
	(error) => {
		const { message, response } = error

		if (message === 'Network Error') {
			alert('Network error')
		}

		switch (response.status) {
			case 400:
			case 404:
				break
			case 401:
			case 403:
				alert('La sesión ha expirado.')
				break
			case 500:
			case 503:
			case 504:
				alert('Ha ocurrido un error en el servidor. Inténtelo nuevamente.')
				break
			default:
				alert('Ha ocurrido un error inesperado. Inténtelo nuevamente.')
				break
		}
	}
)
