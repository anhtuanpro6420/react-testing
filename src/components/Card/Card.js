import React from 'react';

import classes from './Card.module.scss';

const card = props => (
	<div className={classes.Card}>
		<img className={classes.Thumnail} src={props.url} alt="card" />
		<div className={classes.Container}>
			<h3>
				<b>{props.title}</b>
			</h3>
			<p>{props.content}</p>
		</div>
	</div>
);

export default card;
