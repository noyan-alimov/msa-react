import { db } from '../config';

export interface CreateUserParams {
	displayName: string;
	email: string;
}

export interface CreateDataResponse {
	success: boolean;
	errorMessage?: string;
}

export const createUser = async (
	params: CreateUserParams
): Promise<CreateDataResponse> => {
	const { displayName, email } = params;

	try {
		await db.collection('users').doc().set({
			displayName,
			email,
		});
		return {
			success: true,
		};
	} catch (err) {
		return {
			success: false,
			errorMessage: err.message,
		};
	}
};
