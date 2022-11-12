import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Topbar from '../../components/TopBar';
import { MainLayoutProps } from './MainLayout.props';
import classes from './MainLayout.module.scss';

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className={classes.MainLayout}>
			<Topbar />
			<Header />
			<main>

			{children}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
