import classes from './ContainerLayout.module.scss';
import { ContainerLayoutProps } from './ContainerLayout.props';
import cn from 'classnames';

const Container = ({ children, className, style, ...props }: ContainerLayoutProps) => {
	return (
		<div className={cn(classes.Container, className)} {...props}>
			{children}
		</div>
	);
};

export default Container;
