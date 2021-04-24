import { makeObservable, observable, action, runInAction } from 'mobx';
import { CreateUpdateDeleteDataResponse } from '../firebase/db/models';
import {
	createQuiz,
	updateQuiz,
	deleteQuiz,
	getQuizzesByUserId,
} from '../firebase/db/quiz';
import { Quiz, createQuizModel } from '../models';

export class QuizStore {
	quizzes: Quiz[] = [];
	quizzesErrorMsg: string = '';

	selectedQuiz: Quiz = createQuizModel();

	constructor() {
		makeObservable(this, {
			quizzes: observable,
			quizzesErrorMsg: observable,
			fetchQuizzes: action,

			selectedQuiz: observable,
			setSelectedQuiz: action,
		});
	}

	setSelectedQuiz(quizId: string) {
		this.selectedQuiz = this.quizzes.find(quiz => quiz.id === quizId);
	}

	async createQuizApi(
		userId: string,
		name: string
	): Promise<CreateUpdateDeleteDataResponse | undefined> {
		return await createQuiz(userId, name);
	}

	async updateQuizApi(userId: string, name: string) {
		return await updateQuiz(userId, name);
	}

	async deleteQuizApi(userId: string, id: string) {
		return await deleteQuiz(userId, id);
	}

	async fetchQuizzes(userId: string) {
		const quizzes = await getQuizzesByUserId(userId);

		runInAction(() => {
			if (typeof quizzes === 'string') {
				this.quizzesErrorMsg = quizzes;
				return;
			}

			this.quizzes = quizzes;
		});
	}
}
