import { AuthResponse, registerUser, loginUser } from '../firebase/auth';
import { createUser, getUser } from '../firebase/db/user';

export class UserStore {
	async signUpUser(email: string, password: string): Promise<AuthResponse> {
		return await registerUser(email, password);
	}

	async signInUser(email: string, password: string): Promise<AuthResponse> {
		return await loginUser(email, password);
	}

	async createUserApi(userId: string, displayName: string, email: string) {
		await createUser({ id: userId, displayName, email });
	}

	async getUserApi(userId: string) {
		await getUser(userId);
	}
}
