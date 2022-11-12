import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import classes from './ProductList.module.scss';
import { ProductListProps } from './ProductList.props';

const ProductList = ({ data }: ProductListProps) => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsReady(true)
		} else {
			setIsReady(false)
		}
	}, [])

	return (
		<div className={classes.ProductList}>

			{
				data.length > 0 && isReady ? data?.map((item) => {
					return (
						<ProductCard key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} category={item.category} description={item.description} rating={item.rating} />
					)
				}) : <p>Empty</p>

			}
		</div>
	);
};

export default ProductList;
