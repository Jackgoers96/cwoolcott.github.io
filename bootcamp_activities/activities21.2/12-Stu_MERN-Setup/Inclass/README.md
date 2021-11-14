# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

* "start": Production - Run server/React 
* "develop": runs server and react development server
* "install": installs server and client dependencies
* "seed": seeds the data
* "build": combines all files to be production ready

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:
* When we make API class it makes it so we done have to use the "http://localhost:3001" in the request

* Since we run a front-end and back-end server for our full-stack application in development, we set it up so all client-side requests to our API server are prefixed with the API server's URL.

API endpoint: "http://localhost:3001/api/getAllCars"
with The proxy: "/api/getAllCars"

```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

* if production, serves the react built front-end

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:
* Wildcard Route servers front-End 


```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
