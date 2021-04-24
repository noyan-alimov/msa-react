import { action, makeObservable, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { AuthResponse, loginUser, registerUser } from '../firebase/auth';
import { CreateUpdateDeleteDataResponse } from '../firebase/db/models';
import {
	createQuiz,
	deleteQuiz,
	getQuizzesByUserId,
	updateQuiz,
} from '../firebase/db/quiz';
import { createUser, getUser } from '../firebase/db/user';
import { createQuizModel, Quiz } from '../models';

export class AppStore {
	userId: string | undefined = undefined;

	quizzes: Quiz[] = [];
	quizzesErrorMsg: string = '';

	selectedQuiz: Quiz = createQuizModel();

	constructor() {
		makeObservable(this, {
			userId: observable,
			setUserId: action,

			quizzes: observable,
			quizzesErrorMsg: observable,
			fetchQuizzes: action,

			selectedQuiz: observable,
			setSelectedQuiz: action,
		});
	}

	setUserId(userId: string) {
		this.userId = userId;
	}

	setSelectedQuiz(quizId: string) {
		this.selectedQuiz = this.quizzes.find(quiz => quiz.id === quizId);
	}

	async signUpUser(email: string, password: string): Promise<AuthResponse> {
		return await registerUser(email, password);
	}

	async signInUser(email: string, password: string): Promise<AuthResponse> {
		return await loginUser(email, password);
	}

	async createUserApi(displayName: string, email: string) {
		if (!this.userId) {
			return;
		}
		await createUser({ id: this.userId, displayName, email });
	}

	async getUserApi() {
		if (!this.userId) {
			return;
		}

		await getUser(this.userId);
	}

	async createQuizApi(
		name: string
	): Promise<CreateUpdateDeleteDataResponse | undefined> {
		if (!this.userId) {
			return;
		}

		return await createQuiz(this.userId, name);
	}

	async updateQuizApi(name: string) {
		if (!this.userId) {
			return;
		}

		return await updateQuiz(this.userId, name);
	}

	async deleteQuizApi(id: string) {
		if (!this.userId) {
			return;
		}

		return await deleteQuiz(this.userId, id);
	}

	async fetchQuizzes() {
		if (!this.userId) {
			return;
		}

		const quizzes = await getQuizzesByUserId(this.userId);

		runInAction(() => {
			if (typeof quizzes === 'string') {
				this.quizzesErrorMsg = quizzes;
				return;
			}

			this.quizzes = quizzes;
		});
	}
}

export const appStoreContext = createContext(new AppStore());
