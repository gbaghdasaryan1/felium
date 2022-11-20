import ProductList from '../../components/ProductList';
import { products } from '../../helpers/data';
import Container from '../../layouts/ContainerLayout';
import MainLayout from '../../layouts/MainLayout';
import classes from './SeeAll.module.scss';
import { SeeAllProps } from './SeeAll.props';

const SeeAllComponent = ({alias}:SeeAllProps) => {


  return(
    <MainLayout>
			<Container>
				<h1 className={classes.PageTitle}>{alias}</h1>
				<ProductList data={products} />
			</Container>
		</MainLayout>
  )
};

export default SeeAllComponent;