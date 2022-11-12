import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ContainerLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
	children: ReactNode;
}
