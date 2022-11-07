import classes from './ContainerLayout.module.scss';
import { ContainerLayoutProps } from './ContainerLayout.props';

const Container = ({ children }: ContainerLayoutProps) => {
	return (
		<div className={classes.Container}>
			{children}
		</div>
	);
};

export default Container;
