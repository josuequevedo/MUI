import { Sidebar } from '../components/Sidebar';
import { Feed } from '../components/Feed';
import { Rightbar } from '../components/Rightbar';
import { Navbar } from '../components/Navbar';
import { Add } from '../components/Add';
import Head from 'next/head';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';

export default function Home({ setDarkMode, darkMode }) {
	return (
		<>
			<Head>
				<title>FrontEndDeveloper</title>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>

				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>

			<Box
				sx={{
					boxSizing: 'border-box',
					bgcolor: 'background.default',
					color: 'text.primary',
				}}
			>
				<Navbar />
				<Stack
					direction='row'
					spacing={2}
					justifyContent='space-between'
				>
					<Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />

					<Feed />

					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</>
	);
}
