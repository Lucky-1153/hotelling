const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', (req, res) =>  {
    res.send('sure whatsup bitch');
})




const personRoutes = require('./routes/personRoutes');

app.use('/person',personRoutes);

app.listen(3000, () => {
    console.log('server is live');
});

//changes added