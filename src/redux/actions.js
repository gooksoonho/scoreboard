//action creator
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

export const addPlayer = (name) => ({
	type : 'ADD_PLAYER',
	name: name
})

export const changeScore = (id, delta) => ({
	type: CHANGE_SCORE,
	id:id,  // id만 적어도 됨
	delta:delta
})

export const removePlayer = (id) => ({
	type:REMOVE_PLAYER,
	id
})