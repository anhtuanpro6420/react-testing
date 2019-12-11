import React from 'react';
import classes from './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import { Layout as LayoutAnt } from 'antd';

const { Content } = LayoutAnt;

const Layout = props => {
	return (
		<>
			<Navbar />
			<Content>{props.children}</Content>
		</>
	);
};

export default Layout;
