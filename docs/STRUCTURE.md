# Project Structure

```bash
projectDAN
├── docs
├── node_modules
├── public
├── src
│   ├── components
│   ├── mixins
│   ├── pages
│   ├── smart-components
│   ├── utils
│   ├── index.css
│   ├── index.js
│   └── registerServiceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```

check [src](SRC.md) structure

## docs
The directory that contains the documentation of this project

## node modules
The directory that contains the installed packages that are used in this project

## public
The directory that contains the public information of the project and the root that starts the application

## src
the directory that contains the source code of the project, this is the main directory that contributors should be updating
check [src](SRC.md) structure

## .gitignore
the file the contains a list of directories to ignore when commiting and pushing to this project

## package-lock.json
The file that contains the the information of the node_module tree

## package.json
the file that contains the node modules used for this project and their version
this file is also responsible for node to understand what to install when you enter
```bash
npm install
```

## README.md
main documentation of the project

## yarn.lock
contains the exact version of dependencies to make installation of node modules across different machines succesful

[go back](CONTRIBUTING.md)