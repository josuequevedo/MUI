import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState('light');
	const darkTheme = createTheme({
		palette: {
			mode: darkMode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Component
				{...pageProps}
				setDarkMode={setDarkMode}
				darkMode={darkMode}
			/>
		</ThemeProvider>
	);
}

export default MyApp;
