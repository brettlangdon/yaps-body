# YAPS Body Parser
A body parsing plugin for [YAPS](https://github.com/brettlangdon/yaps.git).

## Install
### Via NPM
```bash
npm install [-g] yaps-body
```
### Via Git
```bash
git clone git://github.com/brettlangdon/yaps-body.git
cd ./yaps-body
npm install
``

## Usage
```javascript
var yaps = require("yaps");

var yaps_body = require("yaps-body");

var app = new yaps.server();
app.registerPlugin(yaps_body);

var my_plugin = function(options){
    this.POST("/", function(request, server, respond){
        // the request body as a buffer
        console.dir(request.body);
        // any errors raised while reading the POST data
        console.dir(request.bodyError);
        respond(200, "");
    });
};

app.registerPlugin(my_plugin);
app.start();
```

## Settings
```javascript
var yaps = require("yaps");

var yaps_body = require("yaps-body");

var app = new yaps.server({
    // attempt to parse the body as JSON, default: false
    // this means request.body will be an obj and NOT a buffer
    bodyAsJSON: true,
});
app.registerPlugin(yaps_body);

app.start();
```

## License
```
The MIT License (MIT)

Copyright (c) 2013 Brett Langdon <brett@blangdon.com> (http://www.brett.is)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
