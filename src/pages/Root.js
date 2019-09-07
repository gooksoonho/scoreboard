import React from 'react';
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";

export const Root = (props) => {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/heroes" component={Heroes}></Route>
				<Route exact path="/scoreboard" component={Scoreboard}></Route>
			</Switch>
		</BrowserRouter>
	);
}