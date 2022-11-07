import React from 'react';
import { MainLayoutProps } from './MainLayout.props';

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default MainLayout;
