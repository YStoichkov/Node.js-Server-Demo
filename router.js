const handlers = {

};

function match(method, url) {
    const methods = handlers[url] || {};
    const handler = methods[method];

    if (handler == undefined) {
        return defaultHandler;
    } 
    else {
        return handler;
    }
}

function registerHandler(method, url, handler) {
    let methods = handler[url];
    if (methods == undefined) {
        methods = {};
        handlers[url] = methods;
    }
    handlers[url][method] = handler;
}

function defaultHandler(request, response) {
    response.statusCode = 404;
    response.write(`<h1>Not Found</h1>`);
    response.end();
}

module.exports = {
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match
};