import { makeObservable } from 'mobx';
import { createContext } from 'react';
import { AuthResponse, loginUser, registerUser } from '../firebase/auth';

export class AppStore {
	constructor() {
		makeObservable(this, {});
	}

	async signUpUser(email: string, password: string): Promise<AuthResponse> {
		return await registerUser(email, password);
	}

	async signInUser(email: string, password: string): Promise<AuthResponse> {
		return await loginUser(email, password);
	}
}

export const appStoreContext = createContext(new AppStore());
