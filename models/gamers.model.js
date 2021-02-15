const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gamerSchema = new Schema({

    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String , required: true },
    snakegame: { type: Array },
    chess: { type: Array }, 
    tictactoe: { type: Array },
    brickbreak: { type: Array },
    A2048: { type: Array },
    hangman: { type: Array },
    tetris: { type: Array },
    asteroid: {type: Array}
}, {
    timestamps: true,
});

const Gamer = mongoose.model('gamers', gamerSchema);

module.exports = Gamer;