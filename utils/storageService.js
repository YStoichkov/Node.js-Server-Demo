const db = require('../db.json');
const fs = require('fs').promises;

const saveNews = (news) => {
    db.news.push(news)
    let result = JSON.stringify(db, '', 2);
    // fs.writeFileSync('./db.json', result, 'utf8');

    return fs.writeFile('./db.json', result);
}

const savePlayer = (player) => {
    db.players.push(player)
    let result = JSON.stringify(db, '', 2);
    // fs.writeFileSync('./db.json', result, 'utf8');

    return fs.writeFile('./db.json', result);
}

const storageService = {
    saveNews,
    savePlayer
}

module.exports = storageService;