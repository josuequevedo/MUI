import { Box } from '@mui/material';

export const Rightbar = () => {
	return (
		<Box
			sx={{
				bgcolor: 'red',
				flex: 2,
				p: 2,
				display: { xs: 'none', sm: 'block' },
			}}
		>
			Rightbar
		</Box>
	);
};
