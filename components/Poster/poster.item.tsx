import Image from 'next/legacy/image';
import React from 'react';
import classes from './poster.module.scss';
import IMG from '../../public/leaf3.webp';
const PosterItem = () => {

	return (
		<div className={classes.PosterItem} >
			<Image src={IMG} alt="Some" layout='intrinsic' objectFit='cover' height={650} className={classes.PosterImage} />
		</div>
	);
};

export default PosterItem;
