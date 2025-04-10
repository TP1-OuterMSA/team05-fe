import Header from '../../components/layout/Header';
import * as S from '../../styles/layout/LayoutStyle';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<S.Container>
			<Header />
			<S.Main>{children}</S.Main>
		</S.Container>
	);
};

export default Layout;
