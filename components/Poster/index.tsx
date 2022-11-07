import classes from './poster.module.scss';
import Slider from 'react-slick'
import Container from '../../layouts/ContainerLayout';
import PosterItem from './poster.item';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
function SampleNextArrow({ onClick }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return (
		<div
			className={classes.Next}
			onClick={onClick}
		>
			<KeyboardDoubleArrowRightIcon fontSize='large' sx={{ color: "white" }} />

		</div>
	);
}
function SamplePrevArrow({ onClick }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return (
		<div
			className={classes.Prev}
			onClick={onClick}
		>
			<KeyboardDoubleArrowLeftIcon fontSize='large' sx={{ color: "white" }} />
		</div>
	);
};

const Poster = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />
	};
	return (
		<Container>
			<div className={classes.Poster}>
				<Slider {...settings}>
					<PosterItem />
					<PosterItem />
					<PosterItem />
					<PosterItem />
					<PosterItem />
				</Slider>
			</div>
		</Container>
	);
};

export default Poster;
