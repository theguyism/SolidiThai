const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const { Client } = require('@elastic/elasticsearch');

const port = 3000;
const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const esClient = new Client({ node: 'http://localhost:9200' });
const indexName = 'logs';

async function indexLogData(logData) {
  try {
    const response = await esClient.index({
      index: indexName,
      body: logData,
    });
    console.log('Indexed log data:', response);
  } catch (error) {
    console.error('Error indexing log data:', error);
  }
}

async function searchLogs(query) {
  try {
    const response = await esClient.search({
      index: indexName,
      body: {
        query: {
          match: {
            message: query,
          },
        },
      },
    });
    console.log('Search results:', response.hits.hits);
  } catch (error) {
    console.error('Error searching logs:', error);
  }
}

app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});