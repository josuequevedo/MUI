import { Sidebar } from '../components/Sidebar';
import { Feed } from '../components/Feed';
import { Rightbar } from '../components/Rightbar';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';
import { Box, Stack } from '@mui/material';

export default function Home() {
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

			<Box sx={{ boxSizing: 'border-box' }}>
				<Navbar />
				<Stack
					direction='row'
					spacing={2}
					justifyContent='space-between'
				>
					<Sidebar />

					<Feed />

					<Rightbar />
				</Stack>
			</Box>
		</>
	);
}
