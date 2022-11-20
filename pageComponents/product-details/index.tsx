import ProductList from '../../components/ProductList';
import Gallary from '../../components/Sliders/Gallary';
import ProductDetailsSlider from '../../components/Sliders/ProductDetailSlider';
import Container from '../../layouts/ContainerLayout';
import MainLayout from '../../layouts/MainLayout';
import classes from './ProductDetails.module.scss';


const ProductDetailsComponent = () => {
	return (
		<MainLayout>
			<Container >
				<div className={classes.Wrapper}>
					{/* <div className={classes.Images}>
						<ProductDetailsSlider />
					</div> */}
					<div className={classes.Image}>
						<Gallary />
					</div>
					<div className={classes.Details}>
						<p className={classes.Name}>Product Name</p>
						<p className={classes.Price}>PRICE - 8000 AMD</p>
						<p className={classes.Description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ipsum laborum eius quaerat iure dolores, suscipit eum!</p>
						<ul className={classes.Advantages}>
							<li>some property</li>
							<li>some property</li>
							<li>some property</li>
							<li>some property</li>
							<li>some property</li>
						</ul>

						<button>Buy Now</button>
					</div>
				</div>
			</Container>
		</MainLayout>
	);
};

export default ProductDetailsComponent;
