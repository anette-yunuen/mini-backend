const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
 
let items = [{ id: 1, name: 'Item 1' }];

app.get('/api/items', (req, res) => res.json(items));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
