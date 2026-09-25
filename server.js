const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // Show the form and all messages
    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('message', 'utf8', (err, data) => {

            if (err) {
                data = '';
            }

            const messages = data
                .split('\n')
                .filter(msg => msg.trim() !== '')
                .reverse();

            let messageList = '';

            messages.forEach(msg => {
                messageList += `<p>${msg}</p>`;
            });

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(`
                <html>
                <body>
                    <h1>Messages</h1>

                    ${messageList}

                    <form method="POST" action="/message">
                        <input 
                            type="text" 
                            name="message"
                            placeholder="Enter message"
                            required
                        >
                        <button type="submit">Send</button>
                    </form>
                </body>
                </html>
            `);
        });
    }

    // Receive and save a new message
    else if (req.url === '/message' && req.method === 'POST') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {

            const message = decodeURIComponent(
                body.split('=')[1].replace(/\+/g, ' ')
            );

            fs.appendFile('message', message + '\n', err => {

                if (err) {
                    res.writeHead(500);
                    res.end('Error saving message');
                    return;
                }

                // Redirect with 302
                res.writeHead(302, {
                    'Location': '/'
                });

                res.end();
            });
        });
    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end('<h1>Page Not Found</h1>');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});