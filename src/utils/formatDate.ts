export const formatDate = (date: string) => {
	const originalDate: Date = new Date(date);

	const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	const formattedDate: string = dateFormatter.format(originalDate);

	return formattedDate;
};

export const formatDateTime = (date: string) => {
	const originalDate: Date = new Date(date);

	const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});

	const formattedDate: string = dateFormatter.format(originalDate);

	return formattedDate;
};
