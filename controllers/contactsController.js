const layout = require('../views/layout.js');
const contactPage = require('../views/contact.js');

module.exports = (req,res)=>{
    res.write(layout(contactPage,'Contacts'));
    res.end();
}