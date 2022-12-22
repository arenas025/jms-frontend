export type Status = 'idle' | 'loading' | 'success' | 'failed'

export interface CommonInitialState {
	status: Status
}
