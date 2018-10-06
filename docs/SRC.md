# src directory structure
the src is the main directory of the project's source code
## Table of contents
1. [actions](#actions)
2. [components](#components)
3. [mixins](#mixins)
4. [pages](#pages)
6. [reducers](#reducers)
7. [smart-components](#smart-components)
8. [utils](#utils)
9. [index.css](#indexcss)
10. [index.js](#indexjs)
11. [registerServiceWorker.js](#registerserviceworker)
12. [routes.js](#routes)
13. [store.js](#store)

```bash
src
├── actions
│   ├── actionTypes.js
│   └── moduleaction.js
├── components
│   └── component
│       ├── component.css
│       └── component.js
├── mixins
│   └── mixin.js
├── pages
│   └── page
│       ├── page.css
│       └── page.js
├── reducers
│   └── reducer.js
├── smart-components
│   └── smart-component
│       ├── smart-component.css
│       └── smart-component.js
├── utils
│   └── firebase.js
├── index.css
├── index.js
├── registerServiceWorker.js
├── routes.js
└── store.js
```

## actions
Actions is the directory that would contain different actions for a process like authentication (login/signup/fetchuser). These action are basically methods that could use a dispatch method. dispatch methods means to change  state of parent component from a lower component. in this case, the dispatch method comes from [store](#store) and the dispatch parameter is passed to the action through the connect function of redux.  the functions that would take in a dispatch method as parameter then connects to the [reducer](#reducers) to change the state of the store.
#### actionTypes.js
the file that contains the constants of the actions, since reducers and actions would both use a 'type' parameter that dictates the different action types, it is best we make sure that their types are the same names
#### moduelaction.js
an action file

## components
Directory that contains components of the project, components are dumb and only responsible for  rendering the interface. 
Components are reusable custom html elements
### component
The directory of a component
#### component.css
The styling of a component
#### component.js
The source code of a component class

## mixins
Mixins are like java interfaces where it may not be a parent class but other classes may use it for its functions.
Directory that contains reusable functions.
### mixin.js
source code of a mixin and exports a function

## pages
Directory that contains the page components, the difference between pages and other components is it is the main component of page to render
### page
The directory of a page component
#### page.css
The styling of a page component
#### page.js
The source code of a page component

## reducers
Reducers are the global states of the app. a reducer would then return a method that receives a state and action parameter as a format
after a dispatch function is called, each reducer files here should contain reducers for a kind of process like (Login, fethuser, signout) 
are all
see [store](#store) to complete this concept
#### reducer.js
a reducer for a process

## smart-components
Directory that contains smart components, the difference between smart components and components is that it mainly acts as a container.
Smart components are unique and may container multiple components. The smart component mainly handles the **actions** or logic and deals with the backend
### smart-component
The directory of a smart component
#### smart-component.css
The styling of a smart component
#### smart-component.js
The source code of a smart component class

## utils
The directory that contains files that exports objects for components to use
### firebase.js
the firebase object api that connects our project to firebase

## index.css 
### indexcss
contains the style of the root page

## index.js
### indexjs
since this is a single web page application, this file acts as the root page and handles the mounting of our project

## registerServiceWorker.js
### registerserviceworker
the javascript responsible for optimizing speed of the project and more so since this is sa single web page application.
This script allows our project to follow PRPL pattern as our server will push all the main assets including this
and this would pre-cache our other routes.

## routes.js
### routes
This contains the routes of our application that gets mounted on the index.js file

## store.js
### store
this is the app's redux's store configuration, the store is basically the container of all the global states of the application,
**(Store vs reducer)** reducers are the global variable states themselves and formatted function that would be handled with switch cases to process the states, store is the global container so they can combine reducers/states



[go back](STRUCTURE.md)