import Container from '../../layouts/ContainerLayout';
import classes from './Topbar.module.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Topbar = () => {
	return (
		<section className={classes.Topbar}>
			<Container>
				<div className={classes.TopbarContent}>
					<a href='tel:+37494609304'>
						<PhoneIcon fontSize='small' />
						+374 94-609-304
					</a>
					<a href='mailto:gbaghdasaryan1998@gmail.com'>
						<MailOutlineIcon fontSize='small' />
						gbaghdasaryan1998@gmail.com
					</a>
				</div>
			</Container>
		</section>
	);
};

export default Topbar;
