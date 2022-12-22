export interface TaskObjectInterface {
	id: number | undefined
	name: string
	activity_id: number | undefined
	started_at: string
}

export interface DeleteTaskInterface {
	id: string
}
