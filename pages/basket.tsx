import React from 'react';
import BasketPage from '../pageComponents/basket';
import useTranslation from 'next-translate/useTranslation'

const Basket = () => {
	const { t } = useTranslation()
	return (
		<>
			<BasketPage />
		</>
	)
};

export default Basket;
