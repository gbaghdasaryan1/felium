/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { data } from './data';
import classes from './Gallary.module.scss';

type ImageItem = {
	original: string;
	thumbnail: string;
}
const images: ImageItem[] = [
	{
		original: "https://picsum.photos/id/237/300/150",
		thumbnail: "https://picsum.photos/id/237/300/150"
	},
	{
		original: "https://picsum.photos/id/1/300/150",
		thumbnail: "https://picsum.photos/id/1/300/150"
	},
	{
		original: "https://picsum.photos/id/10/300/150",
		thumbnail: "https://picsum.photos/id/10/300/150"
	},
	{
		original: "https://picsum.photos/id/100/300/150",
		thumbnail: "https://picsum.photos/id/100/300/150"
	},
	{
		original: "https://picsum.photos/id/101/300/150",
		thumbnail: "https://picsum.photos/id/101/300/150"
	},
	{
		original: "https://picsum.photos/id/1000/300/150",
		thumbnail: "https://picsum.photos/id/1000/300/150"
	},
	{
		original: "https://picsum.photos/id/1001/300/150",
		thumbnail: "https://picsum.photos/id/1001/300/150"
	},
	{
		original: "https://picsum.photos/id/1001/300/150",
		thumbnail: "https://picsum.photos/id/1001/300/150"
	},
	{
		original: "https://picsum.photos/id/1001/300/150",
		thumbnail: "https://picsum.photos/id/1001/300/150"
	},
	{
		original: "https://picsum.photos/id/1001/300/150",
		thumbnail: "https://picsum.photos/id/1001/300/150"
	}
];





interface IImage {
	original: string;
	thumbnail: string;
}

const Gallary = () => {

	const [items, setItems] = useState<IImage[]>([])
	useEffect(() => {
		converToGallary()
	}, [])

	const converToGallary = () => {
		let r = data.map((item) => {

			return {
				original: item,
				thumbnail: item
			}
		})
		console.log(r);

		setItems(r)
	}

	return (
		<ImageGallery
			items={items}
			showBullets={false}
			showIndex={false}
			showThumbnails={true}
			lazyLoad={false}
			showPlayButton={false}
			showNav={true}
			showFullscreenButton={false}
			thumbnailPosition={"bottom"}
			renderItem={(item: ReactImageGalleryItem) => {
				console.log(item);

				return <img src={item.original} className={classes.IMG} />

			}}
		/>
	);
}

export default Gallary;
