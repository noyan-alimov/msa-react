import { db } from '../config';
import { CreateUpdateDeleteDataResponse } from './models';
import { Question } from '../../models';

export const createQuestion = async (
	userId: string,
	quizId: string,
	question: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc(quizId)
			.collection('questions')
			.doc()
			.set({
				question,
			});
		return { success: true };
	} catch (err) {
		return {
			success: false,
			errorMessage: err.message,
		};
	}
};

export const updateQuestion = async (
	userId: string,
	quizId: string,
	questionId: string,
	question: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc(quizId)
			.collection('questions')
			.doc(questionId)
			.update({
				question,
			});
		return { success: true };
	} catch (err) {
		return {
			success: false,
			errorMessage: err.message,
		};
	}
};

export const deleteQuestion = async (
	userId: string,
	quizId: string,
	questionId: string
): Promise<CreateUpdateDeleteDataResponse> => {
	try {
		await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc(quizId)
			.collection('questions')
			.doc(questionId)
			.delete();
		return { success: true };
	} catch (err) {
		return {
			success: false,
			errorMessage: err.message,
		};
	}
};

export const getQuestions = async (
	userId: string,
	quizId: string
): Promise<Question[] | string> => {
	try {
		const querySnapshot = await db
			.collection('users')
			.doc(userId)
			.collection('quizzes')
			.doc(quizId)
			.collection('questions')
			.get();
		let questions: Question[] = [];
		querySnapshot.forEach(doc => {
			const question = { id: doc.id, ...doc.data() } as Question;
			questions.push(question);
		});
		return questions;
	} catch (err) {
		return err.message;
	}
};
