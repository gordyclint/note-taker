// Dependencies

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

let app = express();
let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));


apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT);
});