const layout = require('../views/layout.js');
const galleryPage = require('../views/gallery.js');

module.exports = (req,res)=>{
    res.write(layout(galleryPage,'Gallery'));
    res.end();
}