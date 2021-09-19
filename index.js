const http = require('http');
const homeController = require('./controllers/homeController.js');
const stadiumController = require('./controllers/stadiumController.js');
const teamController = require('./controllers/teamController.js');
const router = require('./router.js');

router.get('/',homeController)
router.get('/team',teamController)
router.get('/stadium',stadiumController)

const port = 3000;
const server = http.createServer(requestHandler);
function requestHandler(request, response) {
    const url = new URL(request.url, 'http://localhost');
    console.log('>>>', request.method, request.url);
    const handler = router.match(request.method, url.pathname);
    handler(request, response);
}
server.listen(port,()=>console.log('Server listening on port 3000...'))