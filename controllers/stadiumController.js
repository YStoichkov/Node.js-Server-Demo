const layout = require('../views/layout.js');
const stadiumPage = require('../views/stadium.js');

module.exports = (req, res) => {
    res.write(layout(stadiumPage,'Anfield'));
    res.end();
}