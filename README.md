# express-id

Express middleware to injects IDs to paths

## Usage

Get it:

```sh
npm install --save express-id
```

Add it as an Express middleware at any mount path and use any ID generation mechanism you like:

```js
const express = require('express');
const expressId = require('express-id');
const shortid = require('shortid');

const app = express();

app.get('/', expressId(shortid.generate));

app.get('/:id', function (req, res, next) {
  res.send('Now we have ID '+ req.params.id);
});

app.listen(3000);

```

When you hit http://localhost:3000, you'll be redirected to a URL with a newly generated ID appended to the path. The query string will be preserved.
