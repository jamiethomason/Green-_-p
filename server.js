const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const blogList = require('./server/models/blog-list');
const { application } = require('express');
const PORT = 4000;
const apiRoutes = require('./server/models/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });