import { makeObservable } from 'mobx';
import { createContext } from 'react';
import { AuthResponse, loginUser, registerUser } from '../firebase/auth';
import { createUser } from '../firebase/db/user';

export class AppStore {
	constructor() {
		makeObservable(this, {});
	}

	async signUpUser(
		displayName: string,
		email: string,
		password: string
	): Promise<AuthResponse> {
		await createUser({ displayName, email });
		return await registerUser(email, password);
	}

	async signInUser(email: string, password: string): Promise<AuthResponse> {
		return await loginUser(email, password);
	}
}

export const appStoreContext = createContext(new AppStore());
