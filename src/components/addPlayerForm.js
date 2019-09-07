import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
	textInput = React.createRef();
	// state={
	// 	value:''
	// }
	// handleValueChange = (e) => {
	// 	this.setState({value:e.target.value});
	// }

	handleSubmit = (e) => {
		//submit 의 기본 이벤트 막기
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(player.validity.valid);
		console.log(form.checkValidity());


		//3) 부모에서 받은 콜백 펑션을 호출
		// this.props.addPlayer(this.state.value);
		//this.textInput.current === document.getElementById("player")
		this.props.addPlayer(this.textInput.current.value);
	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				{/*<input id="player" className="input" type="text" placeholder="enter a player's name"*/}
				{/*			 value={this.state.value} onChange={this.handleValueChange} ref={this.textInput} required></input>*/}
				<input id="player" className="input" type="text" placeholder="enter a player's name"
				ref={this.textInput} required></input>
				<input className="input" type="submit" value="Add palaer"></input>
			</form>
		)
	}
}


const mapActionToProps = (dispatch) => ({
	addPlayer: (name) => dispatch(addPlayer(name))
})

export default connect(null, mapActionToProps)(AddPlayerForm);