const { Schema, model } = require("mongoose");

const guildMember = new Schema({
    memberID: {
        type: String,
        default: null,
    },
    guildID: {
        type: String,
        default: null,
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
    money: {
        type: Number,
        default: null,
    },
    bank: {
        type: Number,
        default: null,
    },
    lastDaily: {
        type: Number,
        default: null,
    },
    lastWeekly: {
        type: Number,
        default: null,
    }
});

module.exports = model('guildMemberData', guildMember);
