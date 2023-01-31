

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
        team1: 1.3,
        x: 3.25,
        team2: 6.5,
    },
    scored: ['Gullit', 'Ballack', 'Pedro', 'Kevin'],



};

//1.

for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}
//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]} `;
    console.log(`Odd of ${teamStr} ${odd}`);
}
