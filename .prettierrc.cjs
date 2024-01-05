module.exports = {
	plugins: ['prettier-plugin-astro'],
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	arrowParens: 'always',
	bracketSpacing: true,
	quoteProps: 'consistent',
	bracketSameLine: false,
	jsxSingleQuote: true,
	singleQuote: true,
	semi: true,
	trailingComma: 'none',
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }]
};
