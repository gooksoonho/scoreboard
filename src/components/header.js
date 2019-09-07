import React from "react";
import {Stats} from "./stats";
import Stopwatch from "./Stopwatch";
import PropTypes from "prop-types"
import {connect} from "react-redux";

//export 다른 js에서 사용하기위해
const Header = ({title, players}) => { //속성바로 입력
	return (
		<header className='header'>
			<Stats players={players} />
			<h1 className='h1'>{title}</h1>
			<Stopwatch/>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
	title: 'Scoreboard'
}


const mapStateToProps = (state) => ({
	title: state.playerReducer.title
})

export default connect(mapStateToProps)(Header);
