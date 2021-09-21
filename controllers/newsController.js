const layout = require('../views/layout.js');
const newsPage = require('../views/news.js');

module.exports = (req, res) => {
    res.write(layout(newsPage,'News'));
    res.end();
}