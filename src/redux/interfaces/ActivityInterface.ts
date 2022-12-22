export interface ActivityObjectInterface {
	id: number | undefined
	activity: string
	role: 'o' | 'a' | undefined
}

export interface DeleteActivityInterface {
	id: string
}

export interface PostActivityInterface {
	activity: string | FormDataEntryValue
	role: string | FormDataEntryValue
}

export interface UpdateActivityInterface {
	id: string
	activity?: string | FormDataEntryValue | null
	role?: string | FormDataEntryValue | null
}

export interface GetOneActivityInterface {
	id?: string
}
