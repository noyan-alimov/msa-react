import { User } from '../../models';
import { db } from '../config';
import { CreateUserParams, CreateUpdateDeleteDataResponse } from './models';

export const createUser = async (
	params: CreateUserParams
): Promise<CreateUpdateDeleteDataResponse> => {
	const { id, displayName, email } = params;

	try {
		await db.collection('users').doc(id).set({
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

export const getUser = async (id: string): Promise<User | string> => {
	try {
		const doc = await db.collection('users').doc(id).get();
		return {
			uid: doc.id,
			...doc.data(),
		} as User;
	} catch (err) {
		return err.message;
	}
};
