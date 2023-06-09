# These are notes I made from meta's react basics course

## _Keywords_

1. State- the value of all variables your app is working with at a given point
2. component based architecture- building software based on reusable components of code. These components are reusable.
3. Components- standalone parts of a UI. All component names are capitalized. Example; Heading.js
4. Transpiling- interpreting a programming language and translating it to a specific target language.

## Exporting and importing modules

### Exporting modules

Exporting modules can be done in the following ways:

1. Using default exports

```javascript
    export default function addTwo (a,b){
        console.log(a+b);
    }

    or

    function addTwo (a,b) {
        console.log (a+b);
    }

    export default addTwo;
```

2. Using named exports

```javascript
export function addTwo(a, b) {
  console.log(a + b);
}

export function addThree(a, b, c) {
  console.log(a + b + c);
}

or;

function addTwo(a, b) {
  console.log(a + b);
}

function addThree(a, b, c) {
  console.log(a + b + c);
}

export { addTwo, addThree };
```

### Importing modules

An import can be done in the following way

```javascript
import addTwo from "./addTwo";
```

If it was a named export, use this syntax instead.

```javascript
import {addTwo} fron "./addTwo";
```

## Functional components vs class components

1. Functional Component

```javascript
function welcome() {
  return <h1> Hello World!</h1>;
}
```

2. Class Component

```javascript
class welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

### Introduction to Functional components

```javascript
function Heading() {
  let title = "This is a heading";
  return <h1>{title}</h1>;
}
```

### Principles of components: Props

_Props allow you to pass data between components_
Arguments are passed like HTML attributes
When two components communicate to send data, the sending component is known as the parent component while the recieving component is known as the child.The data is unidirectional. Data send through props can never be modified.

For example:
Index.js

```javascript
Import React from 'react';
Import ReactDOM from 'react-dom/client';
Import App from './App.js';

ReactDOM.createRoot(
    document.querySelector('#root')

).render(<App title="Welcome"/>)
```

App.js

```javascript
Import React from 'react';

export function App(props){
    return(
        <h1>{props.title}</h1>
    );
};
```

### Using props.children

This is a special prop that is automatically passed to all components.
Consider the following example:

```javascript
// The apple component
function Apples(props) {
  return (
    <div className="promo-section">
      <div>
        <h2>These apples are: {props.color}</h2>
      </div>
      <div>
        <h3>There are {props.number} apples.</h3>
      </div>
    </div>
  );
}

// The pear component
function Pears(props) {
  return <h2>I don't like pears but {props.friend} does</h2>;
}

//The bag component
function Bag(props) {
  const bag = {
    padding: "2px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0",
  };
  return <div style={bag}>{props.children}</div>;
}

export default Bag;
```

Here is how to render the Bag component with the Apples components as its _props.children_

```javascript
<Bag children={<Apples color="yellow" number="5"/>}>
```

Here is how to render the bag component with the Pears component as its _props.children_

```javascript
<Bag children = {<Pears friend="Peter">}>
```

## JSX and Arrow functions

Consider the following function declaration.

```javascript
function Nav(props) {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  );
}
```

The function can also be written like this using arrow function syntax

```javascript
const Nav = (props) => {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  );
};
```

Note that the parenthesis in arrow functions can be dropped if there's a single paramenter that the function accepts, like in this case, (props). For any number of parameters other than a single parameter, using the parenthesis is compulsory. The following is the arrow function syntax:

```javascript
const example = () => {};
```

## Data and state

### Event listeners

React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.
For example:

```javascript
<button onClick={activateLasers}> Activate Lasers</button>
```

Below is an example using the onClick event handler:

```javascript
function Button() {
  const clickHandler = () => {
    console.log("You clicked me!");
  };

  return (
    <>
      <button onClick={clickHandler}>Learn More</button>
    </>
  );
}

export default Button;
```

## Parent-child data flow

Assuming that we have two components, _Promo and PromoHeading_, Where the _PromoHeading_ component is called from within the _Promo_ component as shown below:

```javascript
function Promo() {
  return (
    <div>
      <PromoHeading />
    </div>
  );
}
```

This makes Promo the parent component and PromoHeading the child component.
Similarly, data can be passed from the parent to the child component in the following way:

```javascript
const data = {
    heading: '50% off on all items!',
    callToAction: 'Everything Must go!'
}
function Promo (){
    return(
        <div>
        <PromoHeading
        heading={data.heading}
        callToAction={data.callToAction}
        />
        </div>
    )
}
export default Promo;

//the PromoHeading component starts here

function PromoHeading(props){
    return(
        <h1>{props.heading}</h1>
        <h2>{props.callToAction}</h2>
    )
}
export default PromoHeading;

```

In the example above, the change is made in the parent component and automatically applied in the child component using props.
The one-way flow in react allows for data to move from top to bottom through the component hierarchy.

### Stateless vs stateful

State data is data inside the components that it controls and can mutate.State is managed within the component (similar to variables declared within a function).
Stateful components keep track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.

## Hooks

Hooks are functions that let you hook into React state and lifecycle features from components. They let you use state and other React features without writing a class. Here is how to import and use the useState hook:

```javascript
import React, { useState } from "react";
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Rules of Hooks

1. You can only call hooks at the top level of your components or your own hook.
2. You cannot call hooks inside loops or conditions.
3. You can only call hooks from react functions, not regular JS

### Context

Context provides a way to share data between components without having to explicitly pass a prop through every level of the tree (as a means to avaoid prop drilling).
Context is primarily used when some data needs to be accessible by many components at different levels.

#### _The React.createContext API_

```javascript
const myContext = React.createContext(defaultValue);
```

The code snippet above creates a context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them.
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. for example:

```javascript
<myContext.Provider value={/*a value*/}>

<myContext.Provider/>
```

## Conditional Rendering

Conditional rendering in react works the same way conditions work in JS. It is the use of operators to create elements representing the current state and allowing react to update the UI to match them.
For example,Consider the two components below;

```javascript
function UserGreeting(props) {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up!</h1>;
}
```

Then, create a Greeting component that displays either of these depending on whether a user is logged in.

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

## React Router

### Adding a router

The first step in adding a router is to create the _Browser Router_ and configure the first route. This is done in the 'main.jsx' file as shown below:

```javascript
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

This first route is called the _root route_ since the rest of the routes in the app render within it.
The other routes in the App component can be created as follows:

```javascript
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts";
import About from "./components/About";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          {" "}
          Calculator{" "}
        </Link>
        <Link to="/promo" className="nav-link">
          {" "}
          About{" "}
        </Link>
        <Link to="/contacts" className="nav-link">
          {" "}
          Contacts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Calculator />}></Route>
        <Route path="/promo" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}
```

### Keys

Keys are identifiers that help react determine which items have changed, added or been removed. They also instruct the treatment of elements in the event of updates.
For example:

```javascript
<ul>
<li key="Beer"> Beer</li>
<li key="Wine"> Wine</li>
</ul>

<ul>
<li key="Cider">Cider</li>
<li key="Beer">Beer</li>
<li key="Wine"> Wine</li>
</ul>
```

When using keys, use a stable identifier that is unique among its siblings to allow react to reuse as many elements from the list as possible, avoiding recreation when the content is the same
