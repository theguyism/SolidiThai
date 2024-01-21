# SolidiThai

# Node.js and Express.js Application with MySQL and Elasticsearch Integration

This is a Node.js and Express.js application that demonstrates the integration of MySQL for relational data storage using Sequelize as the ORM and Elasticsearch for storing and querying streaming data logs.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL server running with a database and user credentials.
- Elasticsearch running on your machine.

### Installation

Clone the repository:
 ```bash
 git clone https://github.com/theguyism/SolidiThai.git
 cd SolidiThai

1.Install dependencies
  npm install express jsonwebtoken ws mysql sequelize elasticsearch

2.Configure MySQL and Elasticsearch
  Update the MySQL connection configuration in app.js with your database credentials.
  Update the Elasticsearch client configuration in app.js with your Elasticsearch server details.

3.Start the application
  npm start

4.Test the application
  Use tools like Postman or curl to test the CRUD operations on the /users endpoint for MySQL integration.
  Use WebSocket clients to test real-time text communication through the WebSocket server.
  Verify the Elasticsearch integration by indexing and querying data using the provided functions.

Application Structure
app.js: Main application file containing the Express.js server setup, routes, and integrations with MySQL, Sequelize, and Elasticsearch.
models/: Directory containing Sequelize models for MySQL database tables.
routes/: Directory containing Express.js route handlers.
config/: Directory containing configuration files (e.g., database configurations).

License
This project is licensed under the MIT License.

Acknowledgements
Node.js
Express.js
Sequelize
Elasticsearch


   
