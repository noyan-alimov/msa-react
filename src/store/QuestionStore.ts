import { action, makeObservable, observable, runInAction } from 'mobx';
import {
	createQuestion,
	deleteQuestion,
	getQuestions,
	updateQuestion,
} from '../firebase/db/question';
import { Question } from '../models';

export class QuestionStore {
	questions: Question[] = [];
	questionsErrMsg: string = '';

	constructor() {
		makeObservable(this, {
			questions: observable,
			questionsErrMsg: observable,
			fetchQuestions: action,
		});
	}

	async fetchQuestions(userId: string, quizId: string) {
		const questions = await getQuestions(userId, quizId);

		runInAction(() => {
			if (typeof questions === 'string') {
				this.questionsErrMsg = questions;
				return;
			}

			this.questions = questions;
		});
	}

	async createQuestionApi(userId: string, quizId: string, question: string) {
		return await createQuestion(userId, quizId, question);
	}

	async updateQuestionApi(
		userId: string,
		quizId: string,
		questionId: string,
		question: string
	) {
		return await updateQuestion(userId, quizId, questionId, question);
	}

	async deleteQuestionApi(userId: string, quizId: string, questionId: string) {
		return await deleteQuestion(userId, quizId, questionId);
	}
}
