import React from "react";
import PropTypes from	"prop-types";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

class Counter extends React.Component { //extends 부모가 가지고 있는 속성 메서드를 물려 받는다
	// constructor(){
	// 	super();
	// 	this.handleChangeScore = this.handleChangeScore.bind(this);
	// }
	//
	// handleChangeScore (delta) { // = incrementScore: function ()
	// 	this.setState((prevState) => ({score: prevState.score + delta})); //직전에 state를 처리 하기위해 비동기 처리
	// }

	render() {
		return(
			<div className="counter">
				<button className="counter-action decrement"
								onClick={() => this.props.changeScore(this.props.id, -1)}>-</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment"
								onClick={() => this.props.changeScore(this.props.id, +1)}>+</button>
			</div>
		)
	}
}

Counter.propTypes = {
	score: PropTypes.number,
	id: PropTypes.number,
	changeScore: PropTypes.func
}

const mapActionToProps = (dispach) => ({
	changeScore: (id, delta) => dispach(changeScore(id, delta))
});

export default connect(null, mapActionToProps)(Counter);
