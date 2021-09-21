const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const storageService = require('./utils/storageService.js');
const homeController = require('./controllers/homeController.js');
const stadiumController = require('./controllers/stadiumController.js');
const teamController = require('./controllers/teamController.js');
const router = require('./router.js');
const newsController = require('./controllers/newsController.js');
const galleryController = require('./controllers/galleryController.js');
const contactsController = require('./controllers/contactsController.js');

router.get('/',homeController)
router.get('/team',teamController)
router.get('/stadium',stadiumController)
router.get('/news',newsController)
router.get('/gallery',galleryController)
router.get('/contact',contactsController)

const port = 3000;
const server = http.createServer(requestHandler);
function requestHandler(request, response) {
    const url = new URL(request.url, 'http://localhost');
    console.log('>>>', request.method, request.url);
    const handler = router.match(request.method, url.pathname);
    handler(request, response);
}
server.listen(port,()=>console.log('Server listening on port 3000...'))