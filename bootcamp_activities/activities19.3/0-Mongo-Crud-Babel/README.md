### **CHRIS' BABEL-IZE EXCER-CIZE ||| 0-Mongo-Crud-Babel**

Make sure MONGO DB "notetaker" exists

*Install packages and Start App to make sure application works*

> npm i 
> npm start

*Install both babel-cli and babel-preset-env*

> npm i babel-cli babel-preset-env

*Add **script** to package.json*

```json
"build": "babel public -d public/babel"
```

*Run Build Script*

> npm run build

*Update index.htm*
Change 

<script src="app.js"></script>` to `<script src="babel/app.js"></script>`
Start App

> npm start