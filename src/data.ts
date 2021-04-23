export const data = [
	{
		id: '1',
		name: 'John',
		quizzes: [
			{
				id: '2',
				name: 'Football',
				questions: [
					{
						id: '3',
						question: 'Best club in Premier League?',
						answers: [
							{
								id: '4',
								answer: 'Arsenal',
								isCorrect: false,
							},
							{
								id: '5',
								answer: 'Manchester United',
								isCorrect: true,
							},
							{
								id: '6',
								answer: 'Chelsea',
								isCorrect: false,
							},
							{
								id: '7',
								answer: 'Liverpool',
								isCorrect: false,
							},
						],
					},
					{
						id: '12',
						question: 'Best club in La Liga?',
						answers: [
							{
								id: '8',
								answer: 'Real Madrid',
								isCorrect: false,
							},
							{
								id: '9',
								answer: 'Valencia',
								isCorrect: false,
							},
							{
								id: '10',
								answer: 'Atletico Madrid',
								isCorrect: false,
							},
							{
								id: '11',
								answer: 'Barcelona',
								isCorrect: true,
							},
						],
					},
					{
						id: '13',
						question: 'What team won the Football World Cup in 2018?',
						answers: [
							{
								id: '14',
								answer: 'England',
								isCorrect: false,
							},
							{
								id: '15',
								answer: 'France',
								isCorrect: true,
							},
							{
								id: '16',
								answer: 'Belgium',
								isCorrect: false,
							},
							{
								id: '17',
								answer: 'Brazil',
								isCorrect: false,
							},
						],
					},
				],
			},
			{
				id: '18',
				name: 'Hollywood',
				questions: [
					{
						id: '19',
						question: 'Who played Achilles in Troy movie(2004)?',
						answers: [
							{
								id: '20',
								answer: 'Johny Depp',
								isCorrect: false,
							},
							{
								id: '21',
								answer: 'Robert De Niro',
								isCorrect: false,
							},
							{
								id: '22',
								answer: 'Brad Pitt',
								isCorrect: true,
							},
							{
								id: '23',
								answer: 'Orlando Bloom',
								isCorrect: false,
							},
						],
					},
					{
						id: '24',
						question: 'How old is Leonardo Di Caprio as of April 2021?',
						answers: [
							{
								id: '25',
								answer: '46 years',
								isCorrect: true,
							},
							{
								id: '26',
								answer: '52 years',
								isCorrect: false,
							},
							{
								id: '27',
								answer: '44 years',
								isCorrect: false,
							},
							{
								id: '28',
								answer: '30 years',
								isCorrect: false,
							},
						],
					},
				],
			},
		],
	},
	{
		id: '29',
		name: 'Sally',
		completedQuizzes: [
			{
				id: '30',
				quizId: '2',
				responses: [
					{
						questionId: '3',
						answerId: '5',
					},
					{
						questionId: '12',
						answerId: '8',
					},
					{
						questionId: '13',
						answerId: '15',
					},
				],
			},
		],
	},
];
