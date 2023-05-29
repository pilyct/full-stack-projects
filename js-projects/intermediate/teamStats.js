/*
Project: Team Stats

We want to create, retrieve, and add information about your favourite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
	// Object: _players
  _players: [
    {
      firstName: 'Susi',
      lastName: 'Wolff',
      age: 35
    },
    {
      firstName: 'Carlos',
      lastName: 'Sainz',
      age: 28
    },
    {
      firstName: 'Max',
      lastName: 'Verstappen',
      age: 25
    }
  ],
	// Object: _games
  _games: [
    {
      opponent: 'RedBull',
      teamPoints: 30,
      opponentPoints: 68
    },
    {
      opponent: 'MacClaren',
      teamPoints: 18,
      opponentPoints: 24
    },
    {
      opponent: 'Mercedes',
      teamPoints: 45,
      opponentPoints: 56
    }
  ],
	// Getters
  get players () {
    return this._players;
  },

  get games () {
    return this._games;
  },

	// .addPlayer() Method
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    }
    return team._players.push(player); // This adds the new player information into the _players object.
  },

	// .addGame() Method
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    return team._games.push(game); // This adds the new game information into the _games object.
  }

};

// New Data Inputs
team.addPlayer('Bugs','Bunny',76);
console.log(team._players); // Check if the new player was added

team.addGame('Titans',100,98);
console.log(team._games); // Check if the new game was added
