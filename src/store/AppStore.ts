import { action, makeObservable, observable } from 'mobx';
import { createContext } from 'react';
import { QuizStore } from './QuizStore';
import { UserStore } from './UserStore';

export class AppStore {
	userId: string | undefined = undefined;

	userStore: UserStore = new UserStore();
	quizStore: QuizStore = new QuizStore();

	constructor() {
		makeObservable(this, {
			userId: observable,
			setUserId: action,
		});
	}

	setUserId(userId: string | undefined) {
		this.userId = userId;
	}
}

export const appStoreContext = createContext(new AppStore());
