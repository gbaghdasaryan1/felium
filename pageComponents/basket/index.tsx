import classes from './Basket.module.scss';
import ProductList from '../../components/ProductList';
import Container from '../../layouts/ContainerLayout';
import MainLayout from '../../layouts/MainLayout';
import { products } from '../../helpers/data';
import { useAppSelector } from '../../redux/hooks';

const BasketPage = () => {

	const { items } = useAppSelector(state => state.basket);
	console.log(items, "basket page");

	return (
		<MainLayout>
			<Container>
				<h1 className={classes.PageTitle}>Basket</h1>
				<ProductList data={items} />
			</Container>
		</MainLayout>
	);
};

export default BasketPage;
