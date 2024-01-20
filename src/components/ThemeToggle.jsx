import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		const themeStorage = theme || localStorage.getItem('laurentcodes.theme');

		if (themeStorage === 'dark') {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}

		localStorage.setItem('laurentcodes.theme', theme);
	}, [theme]);

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button
			onClick={handleClick}
			className={`self-center ${
				theme === 'light' ? 'text-gray-900' : 'text-yellow-400'
			}`}
		>
			{theme === 'light' ? (
				<iconify-icon
					icon='material-symbols-light:dark-mode'
					width={25}
					height={25}
				></iconify-icon>
			) : (
				<iconify-icon
					icon='iconoir:sun-light'
					width={25}
					height={25}
				></iconify-icon>
			)}
		</button>
	);
};

export default ThemeToggle;
