export const formatDate = (date: string) => {
	const originalDate = new Date(date);

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	const formattedDate = dateFormatter.format(originalDate);

	return formattedDate;
};

export const formatDateTime = (date: string) => {
	const originalDate = new Date(date);

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});

	const formattedDate = dateFormatter.format(originalDate);

	return formattedDate;
};
