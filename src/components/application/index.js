import React, { Component } from 'react';
import './index.scss';

class Application extends Component {
  constructor (props){
    super (props);

    this.state = {
      games: [
        
      ]
    }

    fetch('/api/getGames') // Call the fetch function passing the url of the API as a parameter
        .then(
            response => response.json(),
            error => console.log('Danger Will Robinson', error)
        )
        .then(data => {
            this.setState({
                games: data
            })
        })
  }
  render() {

    let gameList = this.state.games.map(game => {
      return <div>
        {game.gameName}
      </div>
    })

    return (
      <div className="App">
        {gameList}
      </div>
    );
  }
}

export default Application;
