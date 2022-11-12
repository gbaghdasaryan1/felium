import classes from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { basketSlice } from '../../redux/reducers/basket/basket.slice';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';


const ProductCard = (props: ProductCardProps) => {

	const dispatch = useAppDispatch();
	const { addBasketItem, removeBasketItem } = basketSlice.actions;
	const router = useRouter();


	const removeFromBasket = () => {
		dispatch(removeBasketItem(props))
	}
	const addToCart = () => {
		dispatch(addBasketItem(props));
	}
	const addToLike = () => {
		alert("add to like")
	}
	return (
		<div className={classes.ProductCard}>
			<div style={{ backgroundImage: `url(${props?.image})` }} className={classes.ProductImage}>

				{
					!router.pathname.includes("basket") ? <span onClick={() => addToCart()}>
						<ShoppingCartOutlinedIcon />
					</span> : <span >
						<CloseIcon onClick={() => removeFromBasket()} />
					</span>
				}


				<span onClick={() => addToLike()}>
					<FavoriteBorderOutlinedIcon />
				</span>
			</div>
			<p>Price - 5500 AMD</p>
			<span>Product Name</span>
			<button>Buy Now</button>
		</div>
	);
};

export default ProductCard;
