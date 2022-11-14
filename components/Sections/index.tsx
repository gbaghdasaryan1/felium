import Image from 'next/image';
import Container from '../../layouts/ContainerLayout';
import classes from './Section.module.scss';
import { SectionProps } from './Section.props';
import ProdIMG from '../../public/product/product.jpg';
import ProductCard from '../ProductCard';
import { products } from '../../helpers/data';
import ProductList from '../ProductList';
import Link from 'next/link';


const Section = ({ title = "New Collection",alias = "new" }: SectionProps) => {
	return (

		<Container className={classes.Section}>
			<h2>
				{title}
				<Link href={`/see-all/${alias}`}>See all</Link>
			</h2>
			<ProductList data={products} />
		</Container>
	);
};

export default Section;
