const express = require('express')
const app = express()
const port = 3000
app.use(express.static('./dist/angular-heroku'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/angular-heroku/'}
);
});
app.listen(process.env.PORT || 8080);
