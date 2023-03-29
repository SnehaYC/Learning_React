<!-- @format -->

# Learning React

## Section - I

### What is React/ReactJS?

- React is a JavaScript library for building user interfaces.
- React is not a framework – it's not even exclusive to the web.
- It's used with other libraries to render to certain environments.
- It is a client-side JavaScript library.
- React is all about modern, reactive user interfaces for the web.

### Why React instead of "Just JavaScript"?

- Most of the modern programming languages fall into two general paradigms: imperative (procedural, OOP etc.) and declarative(functional etc.).
- Imperative code focuses on writing an explicit sequence of commands to describe how you want the computer to do things, and declarative code focuses on specifying the result of what you want.
- JavaScript uses imperative approach and React uses a declarative approach which makes easy to build modern, rich, complex user interfaces easier.

<!-- - In JavaScript we have to write code for every single step that should be taken; to create an element, to set its content, to add classes, to add click listner then what should happen on that click listner every single step needs to be described; this way of programming and bringing something on the screen is called an imperative approach.

- In case of ReactJS our code looks different we can add custome HTML component. React is all about these components.
- React is splitting our application into small building blocks, small components, where evry building block, every component, has a clear task their for our code stays maintainable and manageable and React, the library, will do the heavy lifting to rendring something on to the screen.
- React makes building modern, rich, complex user interfaces easier.
- It uses declarative approach. -->

### What is Single Page Application(SPA)?

- React can be used to control parts of HTML pages or entire pages; i.e 'Widget' approach on a multi-page-application, these pages are still rendered on and served by a backend server.
- React can also be used to control the entire frontend of a web application; i.e. Single-Page-Application. server only sends one HTML page, thereafter, React takes over and controls the UI.

## Section - II

### Understanding 'let' and 'const'

- let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.
- The other difference between var and let is that the latter can only be accessed after its declaration is reached.(temporal dead zone)
- A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.
- While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError.

### Arrow Functions

- Syntax:
- function myFun() {} // normal function
- const myFun = () => {} // arrow function

### Export and Import(Modules)

- The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import. - The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.
- Every module can have two different types of export, named export and default export.
- The ES6 is a JavaScript standard. With the help of ES6, we can create modules in JavaScript. In a module, there can be classes, functions, variables, and objects as well.
- To make all these available in another file, we can use export and import. The export and import are the keywords used for exporting and importing one or more members in a module.

### Classes

-

### Classes/Property/Methods

-

### Spread and Rest Operators

- Syntax: ...
- Spread Oprator: Used to split up array elements or object properties.
- ex. 1. const newArray = [...oldArray, 1, 2]<br/> 2. const newObject = {...oldObject,newProp:5}
- Rest Oprator: Used to merge a list of function arguments into an array
  function sortArgs(...args){
  return args.sort()
  }

### Destructuring

- Destructuring easily extract array elemts or object properties and store them in variables
- 1. Array Destructuring
     [a,b] = ['Hello','there']
     console.log(a) //Hello
     console.log(b) //there

- 2. Object Destructuring
     {name} = {name:'Mina',age:24}
     console.log(name) // Mina
     console.log(age) //undefined

### Reference and Primitive type

### Array Methods

## Section - III

### What are Components?

- Components are reusable building blocks in our user interface. components are just a combination of HTML code, CSS code for styling and some JavaScript logic.

### Declarative Approach

- React allows you to create re-usable and reactive componetns consisting of HTML and JavaScript and CSS.

- Declarative approach define the desired target state and let React figure out the actual JavaScript DOM instruction.

### Creating a project

- Create React App: This is a tool which is use to create React projects.
- It contains pre-configured folders with some basic React code files and a bunch of configuration files which help you build the react app.
- Step: 1 (Run the following command)

  - npx create-react-app project_name
  - cd project_name
  - npm start

- We can run our project with the help of following commands on visual studio
  - npm install
  - npm start
