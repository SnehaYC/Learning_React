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
- ex.

```javascript
1. const newArray = [...oldArray, 1, 2] 2. const newObject = {...oldObject,newProp:5}
```

- Rest Oprator: Used to merge a list of function arguments into an array

```javascript
function sortArgs(...args) {
  return args.sort();
}
```

### Destructuring

- Destructuring easily extract array elemts or object properties and store them in variables
- 1. Array Destructuring
     ```javascript
     [a, b] = ["Hello", "there"];
     console.log(a); //Hello
     console.log(b); //there
     ```

- 2. Object Destructuring
     ```javascript
     {name} = {name:'Mina',age:24}
     console.log(name) // Mina
     console.log(age) //undefined
     ```

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

### Introduction to JSX

- JSX is basically HTML code inside of JavaScript. JSX stands for JavaScript XML

### How react works

- We built our own custom HTML elements and Componetns is basically just a custom HTML element and we do that with the declarative approach, which means we defined the desired target state and react is then responsible for generating and running the actual DOM instructions which update what's visible on the screen.

### Exercise - 1: Working with JSX Code

- Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

```javascript
import React from "react";
export default function App() {
  return (
    <div>
      <p>Practicing React...</p>
      <h1>Exercise done!</h1>
    </div>
  );
}
```

### Building a First custom component

- App.js is our root component.
- With React we build a Component tree; we have main app Component at the top, and then below that, you could have any other kinds of custom HTML elements.
- And other kinds of Components, which in the end hold other pieces of the user interface.
- Only the top most Component is rendered directly into the HTML page with help of that Teact dom render instruction.
- A Component in React is just a JavaScript function. A special kind of function special regarding what it returns JSX code.
- ex.

```javascript
function ExpenseItem() {
  return <h2>Expense item!</h2>;
}
export default ExpenseItem;
```

- Importing this custom component

```javascript
import ExpenseItem from './components/ExpenseItem';
function App(){
  return (
    <div>
    <ExpenseItem></ExpenseItem>
  );
}
```

### Exercise - 2: Building a First Component

- Your task is to build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.
- App.js

```
import React from 'react';
import ExerciseComponent from './ExerciseComponent.js';

export default function App() {
    return (
    <ExerciseComponent></ExerciseComponent>
    );
}
```

- ExerciseComponent.js

```
import React from 'react';

function ExerciseComponent(){
    return <h1>First exercise - done!</h1>
}

export default ExerciseComponent;
```

### writing More Complex JSX code

- In a components their is one important rule, regarding JSX(HTML) code which we return inside of a component; we must only have one root element here per return statement or per JSX code snippet.

### Adding Basic CSS Styling

- To apply a certain look to html element we need to add CSS classes to our component; which are created in .css file.
- On the wrapping div we dont type 'class' here we write there 'className'.

```
<div className="expense-item">
  <div>March 31st 2023</div>
  <div className="expense-item__description"> <h2>Car Insurance </h2>
  <div className="expense-item__price">$293.23
  </div>
  </div>
</div>
```

- This is not really HTML; it looks like HTML but its special JSX syntax invented by React team; but it's still JavaScript code.
- We can write class instead of className it will work but technically we should write className as class is a reserved word of JavaScript.

### Outputing Dynamic Data & working with expressions in JSX

- To add javascript code in html code to output dynamic data we use a special syntax inside of JSX code snippets; we can relapce had coded data with curly braces {}.
- The sepcial thing about these curly braces inside of our JSX code snippets is that in these curly braces between them we can run basic JavaScript expressions.
- In case of date; it is consider as a object it cant be output texts. for printing date we have to call ISOString() built in method avilable on all date objects to output it as a string.

### Passing data via props

- We can make our components reusable by using parameters and a concept called props in react.
- We dont have direct access to the HTML code output by some component in other components; we can't just send our stored data there; we can utilize a concept called props.
- We can pass data to the custom component by adding a attribute and inside of that components, we can then get access to all these attributes which might have been set on our custo component.
- We are building our own custom HTML elements and just as HTML elements can have attributes it turns out that with react, our own custom components can also have attributes there, this concept is just called props instead of attribute and props simply stands for properties; we can set properties of our own custom components.
- how do we get accessto the values defined in the place where we use our custom components?
  - We can get values through parameters which is 'props'.
  - props is a object which holds all the received attributes as properties.
  - We can give any name to that parameter but typically it's name is props to make it clear that is this is object which holds all the values we get for the attributes on our custom elements.
- We can make our components reusable and configurable by using props concepts. it allows you to make our components reusable, and it pass data from another component to this component.

### Exercise - 3: Passing Data via "props"

- You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.

  - The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.
  - The first product item is expected to display the following information:
    - Title: Product 1
    - Price: 10
    - Description: First product
  - The second product item is expected to display the following information:
    - Title: Product 2
    - Price: 20
    - Description: Second product

- Solution:
- App.js

```import React from 'react';
   import Product from './Product';
   import './styles.css';
    export default function App() {
      const item = [
            {
                title:"Product 1",
                price:"10",
                description:"First product",
            },
            {
                title:"Product 2",
                price:"20",
                description:"Second product",
            }
          ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product
            title={item[0].title}
            price={item[0].price}
            description={item[0].description}
            ></Product>

            <Product
            title={item[1].title}
            price={item[1].price}
            description={item[1].description}
            ></Product>
        </div>
    );
}
//export default App;
```

- Product.js

```import React from 'react';
   export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
```

### Working on date

- By using toLocaleString() built-in method we can convert string of date in to calender item(human readable) format.
- This method is accessible on all date objects in JavaScript.

### Spliting components into Multiple Components

- If we have a component that has no content between opening and closing tags we can also write it as a self-closing element.

### Assignment 1:

- Create a new component that is responsible for displaying expenses
- Add multiple ExpenseItem components in that component
- Keep the expenses data in the App component and pass that data into the newly created component
- Add css file.

### Concept of "Composition"

- Composition is nothing but where you combine HTML code, JSX code and styling, extra JavaScript logic (as we done in ExpenseDate.js) this is known as building components.
- We build these components to then build a user interface.
- We are already doing this
  - In App.js we're using Expenses
  - In Expenses we're using ExpenseItem
  - In ExpenseItem we're using ExpenseDate
- This apporach of building a user interface from smaller building blocks is called as composition.

### How to use reusable wrapper components?

- In react we have one special prop which is built into React, which every component receives if we never set it explicitly; it's a children prop.
- Children is a reserved name
- We have added one Custom component - Card (all the default HTML component supports class name for adding CSS classes to the rendered HTML elements) but as our Card component is custom component so we have to write code for eveything.
- So we have to tweak our code in Card.js (const classes = "card " + props.className;)
- SO anything we recive as a class name from outside is added to that string and then we can dynamically point class.

### Summary

1. React Code Syntax & JSX
2. Working with Components
3. Working with Data

### JSX

- In the imported React object there is a createElement method.
- return.createElement() this method takes 3 argument-

  1. First argument is the element which should be created ex. div
  2. second argument is an object that configures this element (an object which sets all the attributes of the element(div)), so currently div doesn't have any argument so we can pass an empty object.
  3. Third object is next element which are present in div.

- ex.

```javascript
  return {
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  }
```

- This is the alternative of JSX code using React object.

```javascript
return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Let's get started")
  React.creatElement(Expenses,{items:expenses},)
);
```

- This syntax little bit complex and it get's automatically created when we use JSX code; so that's why in the past we import react from React in all component file.

## Section - IV

### React State and Working with Events

- React allows you to create re-usable and reactive components consisting of HTML, JavaScript and CSS.

- Exercise: Listening to Events
  - Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).
  - To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".
    - Solution:

```javascript
import React from "react";

import "./styles.css";
// don't change the Component name "App"
export default function App() {
  const clickHandler = () => {
    console.log("Stored!");
  };
  return <button onClick={clickHandler}>Bookmark</button>;
}
```

### How component functions are executed

- Component is a function; the only special thing about that function, is that it returns JSX.
- We never called our component functions, instead we just used these functions like HTML elements in the JSX code.
- It's all started by the index.js file, where we initially point at this app component. That's the first component function which is being called and that happens when the react app is been loaded on the screen which happens when the page is been visited.
- So that's how react goes through all these components executes all these components functions and draws something on to the screen. The only problem with that is, that react never repeats that.
- React goes through all of that when the application is initially rendered, but thereafter it's done. However in modern applications, of course you sometimes want to update what's visible on the screen, for example because a button was clicked and that button should change some text which is being output.
- So we need a way of telling react that something changed and that a certain component should be re-evaluated and that's where react introduces a special concept called state.

### Working with "State"

- We have to import useState function
- useState is a react hook
- all these React hooks can be recognized by the fact that they start with the word "use" in their name and all these hooks must only be called inside of React component functions like ExpenseItem.
- they all just shouldn't be called in any nested functions.
- They must be called directly inside such component functions.
- useState we basically create a special kind of variable, a variable where changes will lead this component function to be called again. And we can therefore assign an initial value for that special variable.
- useState actually returns an array where the first value is the variable itself, the value itself And the second element in the array is that updating function.
- useState, always returns an array with exactly two elements. the first element is the current state value and the second element is a function for updating that.
- Why do we have this state updating function? instead of assigning a new value like this?
  - The reason for that is, that calling this function does not just assign a new value to some variable, but that instead it is a special variable to begin with. It's managed by React somewhere in memory and when we call this state updating function, this special variable will not just receive a new value but, and that's important, the component function in which you called this state updating function and in which you initialized your state with useState.
- If you have data, which might change and where changes to that data should be reflected on the user interface then you need state.

- Exercise: Working with "State"
  - You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.
  - Your task is to add an event listener to listen for clicks on the button that's already included in the App component.
  - Upon a button click, the price should change from $100 to $75.
  - Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.
  - Solution:

```javascript
import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [price, setPrice] = useState(100);
  function clickHandler() {
    setPrice(75);
  }
  return (
    <div>
      <p>${price}</p>
      <button onClick={clickHandler}>Apply Discount</button>
    </div>
  );
}
```
