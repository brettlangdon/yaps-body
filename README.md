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
