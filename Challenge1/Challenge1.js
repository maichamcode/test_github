

const game = {
    team1: 'Chelse',
    team2: 'Real Marid',
    player: [
        [
            'Coutoi',
            'Gullit',
            'Pedro',
            'Kevin',
            'Ballack',
            'Essien',
            'Desaily',
            'Rudiger',
            'Chillwel',
            'James',
            'Shevchenko',
        ],
        [
            'Navas',
            'Beckham',
            'Bale',
            'Kaka',
            'Essien',
            'Seedort',
            'Ramos',
            'Varane',
            'Hakimi',
            'Hernandes',
            'Ronaldo',
        ]
    ],
    odds: {
        team1: 1.5,
        x: 2.6,
        team2: 5.5,
    },
    scored: ['Gullit', 'Ballack', 'Pedro', 'Kevin'],



};

// 1.
const [player1, player2] = game.player;
console.log(player1, player2);
// 2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
// 4. Cầu thủ dự bị
const playersFinal = [...player1, 'M. mount', 'G. Zola', 'K. Haivert'];
console.log(playersFinal);
// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
// 6.
const printGoal = (...player) => {
    console.log(player);
    console.log(`${player.length} goals`);
};

printGoal(...game.scored);
// console.log(game.scored);

// 7. 
team1 < team2 && console.log('Team 1 win');
team1 > team2 && console.log('Team 2 win');
