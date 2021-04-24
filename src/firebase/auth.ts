import { auth } from './config';

export interface AuthResponse {
	success: boolean;
	errorMessage?: string;
}

export const registerUser = async (
	email: string,
	password: string
): Promise<AuthResponse> => {
	try {
		await auth.createUserWithEmailAndPassword(email, password);
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: err.message };
	}
};

export const loginUser = async (
	email: string,
	password: string
): Promise<AuthResponse> => {
	try {
		await auth.signInWithEmailAndPassword(email, password);
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: err.message };
	}
};

export const logoutUser = async (): Promise<AuthResponse> => {
	try {
		await auth.signOut();
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: err.message };
	}
};
