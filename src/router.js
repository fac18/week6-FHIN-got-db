const handlers = require("./handlers.js");

const router = (request, response) => {
    const endpoint = request.url;

    if (endpoint === "/") {
        handlers.handleHome(request, response);

    } else if (endpoint.startsWith("/public")) {
        handlers.handlePublic(request, response, endpoint);

    } else if (endpoint.startsWith("/result")) { handlers.handleSubmit (request, response, endpoint);
    } else if (endpoint.startsWith("/table")) { handlers.handleTable (request, response);
    } else if (endpoint.startsWith("/resultsA")) {handlers.handleA (request, response)
    } else if (endpoint.startsWith("/resultsD")) {handlers.handleD (request, response) 
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"});
            response.end("Sorry, you're lost beyond the wall. Find your way home");
        };
}

module.exports = router;