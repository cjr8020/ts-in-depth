# ts-in-depth

## udemy understanding typescript

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





