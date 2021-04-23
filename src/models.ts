export interface User {
	id: string;
	name: string;
	quizzes: Quiz[];
}

export interface Quiz {
	id: string;
	name: string;
	questions: Question[];
}

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
