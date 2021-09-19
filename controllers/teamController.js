const layout = require('../views/layout.js');
const teamPage = require('../views/team.js')

module.exports = (req, res) => {
    res.write(layout(teamPage, 'Team'));
    res.end();
}

