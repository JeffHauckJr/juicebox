// inside db/seed.js

// grab our client with destructuring from the export in index.js
const { client } = require('./index');

async function testDB() {
    try {
      client.connect();
  
      const { rows } = await client.query(`SELECT * FROM users;`);
      console.log(rows);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

  const {
    client,
    getAllUsers // new
  } = require('./index');
  
  async function testDB() {
    try {
      client.connect();
  
      const users = await getAllUsers();
      console.log(users);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

testDB();