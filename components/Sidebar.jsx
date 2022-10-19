import { Box } from '@mui/material';

export const Sidebar = () => {
	return (
		<Box
			sx={{
				bgcolor: 'skyblue',
				flex: 1,
				p: 2,
				display: { xs: 'none', sm: 'block' },
			}}
		>
			Sidebar
		</Box>
	);
};
