// creates an express() application
const express = require('express');
const app = express();

// passport imports
require('./services/passport');
require('./routes/authRoutes')(app);

// dyanmic port binding: use PORT from .env or 5000
const PORT = process.env.PORT || 5000;
// server listens to incoming traffic on port 5000
app.listen(PORT);
