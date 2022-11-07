import classes from './Header.module.scss';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Container from '../../layouts/ContainerLayout';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
	return (
		<header className={classes.Header}>

			<Container>
				<div className={classes.HeaderContent}>

					<WidgetsIcon fontSize='large' sx={{ color: "#FC7D50", cursor: "pointer" }} />
					<div>
						LOGO
					</div>
					<div className={classes.SearchField}>
						<input type="search" />
						<span>
							<SearchIcon fontSize='medium' sx={{ color: "#FC7D50", cursor: "pointer" }} />
						</span>
					</div>
					<nav className={classes.Navigation}>
						<a href="#">About Us</a>
						<a href="#">Contacts</a>
						<a href="#">Like List</a>
						<a href="#">Basket</a>
						<a href="#">Order</a>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
