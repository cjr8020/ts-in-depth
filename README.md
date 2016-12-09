# ts-in-depth

## udemy understanding typescript


### To run the project:

So now with weback, you need to run two commands:

1.  To build the bundle:

```
$ npm run build

> ts-in-depth@1.0.0 build /home/craiskin/ws/ts/ts-in-depth
> webpack -d --watch

ts-loader: Using typescript@2.1.4 and /home/craiskin/ws/ts/ts-in-depth/tsconfig.json
Hash: 06385a13cdad52c456c6
Version: webpack 1.14.0
Time: 1841ms
             Asset     Size  Chunks             Chunk Names
    ./js/bundle.js   2.4 kB       0  [emitted]  main
./js/bundle.js.map  2.54 kB       0  [emitted]  main
    + 1 hidden modules
```

and

2. To run the lite-server:

```
$ npm start
```



#### Initial Setup

Put project folder under npm control

```
$ npm init
```

creates package.json.

Install the lite server

```
$ npm install lite-server --save-dev
```

package.json:

```
  "devDependencies": {
    "lite-server": "^2.2.2"
  }
```

To start server, add "start" command for npm to execute:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```  
then start at the console:
```
$ npm start
> ts-in-depth@1.0.0 start /home/craiskin/ws/8020/ts/ts-in-depth                                              
> lite-server                                                                                                
                                                                                                             
Did not detect a `bs-config.json` or `bs-config.js` override file. Using lite-server defaults...             
** browser-sync config **                                                                                    
{ injectChanges: false,                                                                                      
  files: [ './**/*.{html,htm,css,js}' ],                                                                     
  watchOptions: { ignored: 'node_modules' },                                                                 
  server: { baseDir: './', middleware: [ [Function], [Function] ] } }                                        
[BS] Access URLs:                                                                                            
 ----------------------------------                                                                          
       Local: http://localhost:3000                                                                          
    External: http://10.0.2.15:3000                                                                          
 ----------------------------------                                                                          
          UI: http://localhost:3001                                                                          
 UI External: http://10.0.2.15:3001                                                                          
 ----------------------------------                                                                          
[BS] Serving files from: ./                                                                                  
[BS] Watching files...                                                                                       
16.11.02 10:57:42 404 GET /index.html                                                                        
16.11.02 10:57:42 404 GET /favicon.ico     
```

To configure TypeScript features:
```
$ tsc --init
message TS6071: Successfully created a tsconfig.json file. 
```
now, if you run 'tsc', the compiler will search for ts files to compile.



### Using Webpack

So now with weback, you need to run two commands:

1.  To build the bundle:

```
$ npm run build

> ts-in-depth@1.0.0 build /home/craiskin/ws/ts/ts-in-depth
> webpack -d --watch

ts-loader: Using typescript@2.1.4 and /home/craiskin/ws/ts/ts-in-depth/tsconfig.json
Hash: 06385a13cdad52c456c6
Version: webpack 1.14.0
Time: 1841ms
             Asset     Size  Chunks             Chunk Names
    ./js/bundle.js   2.4 kB       0  [emitted]  main
./js/bundle.js.map  2.54 kB       0  [emitted]  main
    + 1 hidden modules
```

and

2. To run the lite-server:

```
$ npm start
```




#### adding Webpack


```
$ npm install --save-dev webpack ts-loader
````


##### in `tsconfig`


```
{
    "compilerOptions": {
        "target": "es5",
        "noImplicitAny": false,
        "noImplicitThis": false
    }
}
```


##### create `webpack.config.js`

note: the reason for `./js/bundle.js` is because we want to put generated js
into `js/` folder  which gitingored.  but we don't want to gitignore `webpack.config.js`


```
module.exports = {
  entry: "./app.ts",
  output: {
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};
```


##### package.json

add a couple of scripts:

```
    "build": "webpack -d --watch",
    "build:prod": "webpack -p"
```


NOTE: ts-loader is looking for local typescript:

```
  $ npm run build

  > ts-in-depth@1.0.0 build /home/craiskin/ws/8020/ts/ts-in-depth
  > webpack -d --watch

  Hash: 396f0bfb9d565b6f60f0
  Version: webpack 1.13.3
  Time: 90ms
      + 1 hidden modules

  ERROR in Cannot find module 'typescript'
```


so, install typescript as local dependency

```
$ npm install --save-dev typescript
```

##### change the import statment:


```
import $ = require("jquery");
```


##### index.html

move the bundle.js import script below its usage:


<body>

  <div id="app">Change it with jQuery</div>

  <script src="./js/bundle.js"></script>





