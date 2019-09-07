import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "../actionTypes";

let maxId = 4;

const playerInitialState = {
	title: 'My Scoreboard',
	players:[
		{name: 'LDK', score:0, id:1},
		{name: 'HONG', score:10, id:2},
		{name: 'KIM', score:20,  id:3},
		{name: 'PARK', score:30,  id:4},
	]
}

export const playerReducer = (state = playerInitialState, action) => {
	switch (action.type) {
		case ADD_PLAYER:
			//기존 player에 name을 가진 player 객체 추가
			state.players.push({name:action.name, score:0, id:++maxId});
			return{
				...state,
				players:[
					...state.players
				]
			}
		case CHANGE_SCORE:
			state.players.forEach(player => {
				if (player.id === action.id) {
					player.score += action.delta;
				}
			})
			return{
				...state,
				players:[
					...state.players
				]
			}
		case REMOVE_PLAYER:
			const index = state.players.findIndex(player => player.id === action.id)
			state.players.splice(index, 1);
			return{
				...state,
				players:[
					...state.players
				]
			}
		case UPDATE_TITLE:
			state.title = action.payload.title;
			return{
				...state
			}
			default:
			return state;
		}
}