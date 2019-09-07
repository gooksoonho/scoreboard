import {combineReducers} from "redux";
import {playerReducer} from "./players";



export const allReducers = combineReducers({
	playerReducer
})

// Q: 초기 state를 적으시오
// {
// 	playerReducer: {
// 		   title: 'My Scoreboard',
//       players: [ xxx ]
// 	  }
// }