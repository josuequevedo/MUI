import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
export const Sidebar = ({ setDarkMode, darkMode }) => {
	return (
		<Box
			sx={{
				flex: 1,
				p: 2,
				display: { xs: 'none', sm: 'block' },
			}}
		>
			<Box
				sx={{
					position: 'fixed',
				}}
			>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary='Homepage' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<ListAltIcon />
							</ListItemIcon>
							<ListItemText primary='Pages' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<GroupIcon />
							</ListItemIcon>
							<ListItemText primary='Groups' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<StorefrontIcon />
							</ListItemIcon>
							<ListItemText primary='MarketPlace' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary='Friends' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<AccountBoxIcon />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<ModeNightIcon />
							</ListItemIcon>

							<Switch
								onChange={(e) =>
									setDarkMode(darkMode === 'light' ? 'dark' : 'light')
								}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
