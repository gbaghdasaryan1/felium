import React from 'react';
import Poster from '../../components/Poster';
import Section from '../../components/Sections';
import MainLayout from '../../layouts/MainLayout';

const HomePage = () => {
	return (
		<div>
			<MainLayout>
				<Poster />
				<Section title='New Collection'  alias='New'/>
				<Section title='Best Sellers'  alias='Best sellers'/>
			</MainLayout>
		</div>
	);
};

export default HomePage;
