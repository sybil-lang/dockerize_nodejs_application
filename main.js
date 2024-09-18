const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f2f5;
        }
        header {
          background-color: #007bff;
          color: white;
          padding: 1em;
          text-align: center;
        }
        nav {
          background-color: #343a40;
          padding: 1em;
          text-align: center;
        }
        nav a {
          color: white;
          margin: 0 1em;
          text-decoration: none;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        main {
          padding: 2em;
          text-align: center;
        }
        footer {
          background-color: #007bff;
          color: white;
          padding: 1em;
          text-align: center;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Hello World!</h1>
        <p>from Docker container: ${port}</p>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <main>
        <p>Welcome to the home page.</p>
      </main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </body>
    </html>
  `);
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f2f5;
        }
        header {
          background-color: #007bff;
          color: white;
          padding: 1em;
          text-align: center;
        }
        nav {
          background-color: #343a40;
          padding: 1em;
          text-align: center;
        }
        nav a {
          color: white;
          margin: 0 1em;
          text-decoration: none;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        main {
          padding: 2em;
          text-align: center;
        }
        footer {
          background-color: #007bff;
          color: white;
          padding: 1em;
          text-align: center;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>About Us</h1>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <main>
        <p>This is the about page. Here you can learn more about us.</p>
      </main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
