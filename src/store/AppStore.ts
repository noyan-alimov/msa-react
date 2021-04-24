import { action, makeObservable, observable } from 'mobx';
import { createContext } from 'react';
import { AuthResponse, loginUser, registerUser } from '../firebase/auth';
import { CreateUpdateDeleteDataResponse } from '../firebase/db/models';
import { createQuiz, deleteQuiz, updateQuiz } from '../firebase/db/quiz';
import { createUser, getUser } from '../firebase/db/user';

export class AppStore {
	userId: string | undefined = undefined;

	constructor() {
		makeObservable(this, {
			userId: observable,
			setUserId: action,
		});
	}

	setUserId(userId: string) {
		this.userId = userId;
	}

	async signUpUser(
		displayName: string,
		email: string,
		password: string
	): Promise<AuthResponse> {
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
		console.log(this.userId);

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
}

export const appStoreContext = createContext(new AppStore());
