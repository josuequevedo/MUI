import { Box } from '@mui/system';
import Post from './Post';

export const Feed = () => {
	return (
		<Box
			sx={{
				flex: 4,
				p: 2,
			}}
		>
			<Post />
			<Post />
			<Post />
		</Box>
	);
};
