const http = require('http');

const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

const { Client } = require('pg');

const connectionString = 'postgresql://cavalo:123690@localhost:5432/todo_database'

const client = new Client({
    connectionString: connectionString
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL:', error);
  });

// Example query
client.query('SELECT * FROM your_table')
  .then((result) => {
    console.log('Query result:', result.rows);
  })
  .catch((error) => {
    console.error('Error executing query:', error);
  });

// Close the database connection when done
client.end()
  .then(() => {
    console.log('Disconnected from PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error disconnecting from PostgreSQL:', error);
  });

app.use(cors({credentials: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/todos', (req, res) => {
    res.json({todos: require('./todos-data.json') });
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

