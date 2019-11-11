import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { Layout as LayoutAnt } from 'antd';
import Nav from '../../components/Menu/Menu';

const { Header, Footer, Sider, Content } = LayoutAnt;

const Layout = props => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	// const sideDrawerClosedHandler = () => {
	//   setSideDrawerIsVisible(false);
	// };

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	return (
		<>
			<Nav />
			{/* <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
       <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      /> */}
			<main className={classes.Content}>{props.children}</main>
		</>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);
