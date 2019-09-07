import React from 'react';
// import './App.css';
import Header from "./components/header";
// import Player from "./components/player";
import AddPlayerForm from "./components/addPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlyaer";


class App extends React.Component {

  // constructor() {
  //   super();
  //   this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  //   this.handleChangeScore = this.handleChangeScore.bind(this)
  // }

  getHighScore() {
    let highScore = 0;
    this.props.players.forEach(player => {
      if (player.score>highScore){
        highScore = player.score;
      }
    })
    return highScore;
  }


  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>

    {
      this.props.players.map(player => {
        return (
          <CustomPlayer name={player.name} key={player.id}
                  id={player.id}
                  score={player.score}
                  isHighScore={player.score === this.getHighScore()}
                  // changeScore={this.handleChangeScore}
                  // removePlayer={this.handleRemovePlayer}
          />
        )
      })
    }

    {/* //2) 콜백 펑션을 props로 내려주기*/}
    <AddPlayerForm />
  </div>
  )
  }

  //비동기 변경
  // handleRemovePlayer = (id) => {
	// 	//console.log(this);
  //   //console.log('handleRemovePlayer', id);
  //   this.setState(prevState => {
  //     const players = prevState.players.filter(player => player.id !== id)
  //     return {players} // return {players:players} key와 value가 동일하면 생략가능
  //   })
  // }

  // handleChangeScore(id,delta){
  //   //console.log(id,delta);
  //   this.setState(prevState => {
  //     //id에 해당되는  player를 찾은다음 score에 delta를 더한다.
  //     const players = [ ...prevState.players ];
  //     players.forEach(player => {
  //       if (player.id === id){
  //         player.score += delta;
  //       }
  //     })
  //     return{players} // 키밸류 같음 players: players
  //   })
  // }

  // 1) 콜백 평션 정의
  // handleAddPlayer = (name) => {
  //   //console.log(name);
  //   //add player 로직
  //   this.setState(prevState => {
  //     //원본 배열 훼손 x > deep copy
  //     const players = [ ...prevState.players ];
  //
  //     players.push({name, score: 0, id: ++this.maxId});
  //
  //     return{players};
  //   })
  // }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players,
});

export default connect(mapStateToProps)(App);
