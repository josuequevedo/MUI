import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	Collapse,
	IconButton,
	Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				component='img'
				height='20%'
				image='.../reactmui/public/paisajeCard.jpg'
				alt='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					This impressive paella is a perfect party dish and a fun meal
					to cook together with your guests. Add 1 cup of frozen peas
					along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteIcon />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
