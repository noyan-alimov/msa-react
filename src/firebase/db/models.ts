export interface CreateUserParams {
	id: string;
	displayName: string;
	email: string;
}

export interface CreateUpdateDeleteDataResponse {
	success: boolean;
	errorMessage?: string;
}
