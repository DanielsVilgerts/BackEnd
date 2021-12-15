const mongoose = require('mongoose');

const app = require('./app.js');
const dataController = require('./controllers/dataController.js');

const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb+srv://root:toor@mailing-list-cluster.bojol.mongodb.net/data?retryWrites=true&w=majority`;

mongoose.connect(DB_URL);

app.get('/', dataController.getData);
app.post('/', dataController.postData);
app.delete('/:email', dataController.deleteData);
app.all('/*', (req, res) => {res.send('URL not found!')})

app.listen(PORT);