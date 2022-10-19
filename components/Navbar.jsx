import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: '#fff',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));
const Icons = styled('div')(({ theme }) => ({
	display: 'none',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));
const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<Box>
			<AppBar
				sx={{
					position: 'sticky',
				}}
			>
				<StyledToolbar>
					<Typography
						variant='h6'
						color='#fff'
						sx={{
							display: { xs: 'none', sm: 'block' },
						}}
					>
						Web Desings
					</Typography>
					<HomeIcon
						sx={{
							display: { xs: 'block', sm: 'none' },
						}}
					/>
					<Search>
						<InputBase placeholder='search...' />
					</Search>
					<Icons>
						<Badge badgeContent={4} color='error'>
							<MailIcon />
						</Badge>
						<Badge badgeContent={2} color='error'>
							<Notifications />
						</Badge>
						<Avatar
							sx={{ width: 30, height: 30 }}
							onClick={(e) => setOpen(true)}
						/>
					</Icons>
					<UserBox>
						<Avatar
							sx={{ width: 30, height: 30 }}
							onClick={(e) => setOpen(true)}
						/>
						<Typography variant='span'> Josue </Typography>
					</UserBox>
				</StyledToolbar>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					open={open}
					onClose={(e) => setOpen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
				</Menu>
			</AppBar>
		</Box>
	);
};
