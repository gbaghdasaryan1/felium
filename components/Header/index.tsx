import classes from './Header.module.scss';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Container from '../../layouts/ContainerLayout';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

const Header = () => {

	const { t } = useTranslation();
	const router = useRouter();
	return (
		<header className={classes.Header}>

			<Container>
				<div className={classes.HeaderContent}>

					<WidgetsIcon fontSize='large' sx={{ color: "#FC7D50", cursor: "pointer" }} />
					<div className={classes.Logo} onClick={() => router.push("/")}>
						Felium
					</div>
					<div className={classes.SearchField}>
						<input type="search" />
						<span>
							<SearchIcon fontSize='medium' sx={{ color: "#FC7D50", cursor: "pointer" }} />
						</span>
					</div>
					<nav className={classes.Navigation}>
						<Link href="#">
							{t("common:about_us")}
						</Link>
						<Link href="#">
							{t("common:contacts")}
						</Link>
						<Link href="#">
							{t("common:likes_list")}
						</Link>
						<Link href="/basket">
							{t("common:basket")}
						</Link>
						<Link href="#">
							{t("common:order")}
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
