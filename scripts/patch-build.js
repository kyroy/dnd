const fs = require('fs');

fs.copyFile('dist/dnd/index.html', 'dist/dnd/404.html', (err) => {
    if (err) {
        console.error('index.html -> 404.html copy failed:');
        throw err;
    }
});