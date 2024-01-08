export const truncateString = (str: string, maxLength: number) => {
	return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};

export const removeMarkdownDelimiter = (markdown: string) => {
	const startDelimiter = '---';
	const endDelimiter = '---';

	const startIndex = markdown.indexOf(startDelimiter);
	const endIndex = markdown.indexOf(
		endDelimiter,
		startIndex + startDelimiter.length
	);

	if (startIndex !== -1 && endIndex !== -1) {
		const startPart = markdown.substring(0, startIndex);
		const endPart = markdown.substring(endIndex + endDelimiter.length);
		const updatedMarkdown = startPart + endPart;
		return updatedMarkdown;
	} else {
		return 'Unable to find content between delimiters';
	}
};
