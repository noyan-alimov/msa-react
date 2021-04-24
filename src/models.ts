export interface User {
	uid: string;
	displayName: string;
	email: string;
	quizzes?: Quiz[];
}

export interface Quiz {
	id: string;
	name: string;
	questions?: Question[];
}

export const createQuizModel = () => {
	return {
		id: '',
		name: '',
	};
};

export interface Question {
	id: string;
	question: string;
	answers: Answer[];
}

export interface Answer {
	id: string;
	answer: string;
	isCorrect: boolean;
}

export interface CompletedQuiz {
	id: string;
	quizId: string;
	responses: Response[];
}

export interface Response {
	questionId: string;
	answerId: string;
}
