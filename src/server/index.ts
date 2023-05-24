const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <html>
            <body>
                <div id="root">
                    <h1>Hello World</h1>
                </div>
                <script src="/build/js/vendors.js"></script>
                <script src="/build/js/runtime.js"></script>
                <script src="/build/js/index.js"></script>
            </body>
        </html>
    `);
    res.end();
});

const port = process.env.APP_PORT || 80;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});