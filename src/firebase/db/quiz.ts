import { db } from '../config';
import { CreateUpdateDeleteDataResponse } from './models';

export const createQuiz = async (
	userId: string,
	name: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc()
			.set({ name });
		return { success: true };
	} catch (err) {
		console.log(err);
		return { success: false, errorMessage: err.message };
	}
};

export const updateQuiz = async (
	userId: string,
	name: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc()
			.update({ name });
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: err.message };
	}
};

export const deleteQuiz = async (
	userId: string,
	id: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc(id)
			.delete();
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: err.message };
	}
};
