module.exports = {
	purge: [
		'./src/**/*.tsx',
		'./src/**/*.ts',
		'./src/**/*.jsx',
		'./src/**/*.js',
		'./index.html',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				'half-screen': '50vw',
			},
			height: {
				'80vh': '80vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
