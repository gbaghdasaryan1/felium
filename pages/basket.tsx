import React from 'react';
import BasketPage from '../pageComponents/basket';
import useTranslation from 'next-translate/useTranslation'

const Basket = () => {
	const { t } = useTranslation()
	return (
		<>
			<h1>{t("basket:basket")}</h1>
			<BasketPage />
		</>
	)
};

export default Basket;
