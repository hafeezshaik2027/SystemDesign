const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const users = ['user1', 'user2', 'user3'];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', (req, res) => {
    res.json({ users });    
});

app.post('/users', (req, res) => {
    const newUser = req.body.userId;
    if (!newUser) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    if (users.includes(newUser)) {
        return res.status(400).json({ error: 'User ID already exists' });
    }
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
