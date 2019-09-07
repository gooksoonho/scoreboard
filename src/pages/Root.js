import React from 'react';
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export const Root = (props) => {
	return (
		<BrowserRouter>
			<p>공통메뉴</p>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/heroes" component={Heroes}></Route>
				<Route exact path="/scoreboard" component={Scoreboard}></Route>
			</Switch>
		</BrowserRouter>
	);
}