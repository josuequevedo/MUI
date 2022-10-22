import {
	Fab,
	Modal,
	Tooltip,
	Box,
	Typography,
	styled,
	Avatar,
	TextField,
	Stack,
	ButtonGroup,
	Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import Image from '@mui/icons-material/Image';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';
import { useState } from 'react';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});
const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '20px',
});

export const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title='Delete'
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 30 },
				}}
			>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box
					sx={{
						width: 400,
						height: 300,
						bgcolor: '#fff',
						p: 3,
						borderRadius: 5,
						bgcolor: 'background.default',
						color: 'text.primary',
					}}
				>
					<Typography
						variant='h6'
						sx={{
							color: 'gray',
							textAlign: 'center',
						}}
					>
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							src=''
							sx={{
								width: 30,
								height: 30,
							}}
						/>
						<Typography variant='span'>Full Name</Typography>
					</UserBox>
					<TextField
						sx={{
							width: '100%',
						}}
						id='standard-multiline-static'
						multiline
						rows={3}
						placeholder='What is your mind?'
						variant='standard'
					/>
					<Stack direction={'row'} gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<Image color='secondary' />
						<VideoCameraBack color='success' />
						<PersonAdd color='error' />
					</Stack>
					<ButtonGroup
						fullWidth
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button>Post</Button>
						<Button
							sx={{
								width: '100px',
							}}
						>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};
