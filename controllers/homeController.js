const layout = require('../views/layout.js');
const homePage = require('../views/home.js');

module.exports = (req, res) => {
    res.write(layout(homePage,'Home'));
    res.end();
}

