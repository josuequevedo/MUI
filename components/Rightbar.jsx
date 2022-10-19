import {
	Avatar,
	AvatarGroup,
	Box,
	ImageList,
	ImageListItem,
	Typography,
} from '@mui/material';

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
			<Box
				sx={{
					position: 'fixed',
				}}
			>
				<Typography variant='h6'>Online Friends</Typography>
				<AvatarGroup max={7}>
					<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
					<Avatar
						alt='Travis Howard'
						src='/static/images/avatar/2.jpg'
					/>
					<Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
					<Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
				</AvatarGroup>
				<Typography variant='h6'> Latest Photos</Typography>
				<ImageList>
					<ImageListItem>
						<img
							src={
								'https://www.pexels.com/es-es/foto/carretera-vacia-cerca-del-cuerpo-de-agua-1476880/'
							}
							alt={'item'}
							loading='lazy'
						/>
					</ImageListItem>
				</ImageList>
			</Box>
		</Box>
	);
};
