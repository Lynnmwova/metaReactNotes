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

``` javascript
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
``` javascript
export function addTwo(a,b){
    console.log(a+b);
}

export function addThree(a,b,c){
    console.log(a+b+c);
}

or 

function addTwo(a,b){
    console.log(a+b);
}

function addThree (a,b,c){
    console.log(a+b+c);
}

export {addTwo, addThree};
```
### Importing modules
 An import can be done in the following way
 ``` javascript

import addTwo from "./addTwo";

```

If it was a named export, use this syntax instead. 
``` javascript
import {addTwo} fron "./addTwo";
```
## Functional components vs class components

1. Functional Component 
``` javascript
function welcome(){
    return <h1> Hello World!</h1>
};
```
2. Class Component 
```javascript
class welcome extends React.Component {
    render () {
        return <h1>Hello World!</h1>
    };
};
```
### Introduction to Functional components 

``` javascript
function Heading ()
{
    let title = "This is a heading";
    return (
        <h1>{title}</h1>
    );
};

```
### Principles of components: Props
_Props allow you to pass data between components_
Arguments are passed like HTML attributes
When two components communicate to send data, the sending component is known as the parent component while the recieving component is known as the child.The data is unidirectional. Data send through props can never be modified.

For example:
Index.js
``` javascript
Import React from 'react';
Import ReactDOM from 'react-dom/client';
Import App from './App.js';

ReactDOM.createRoot(
    document.querySelector('#root')

).render(<App title="Welcome"/>)
```

App.js
``` javascript 
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
``` javascript
// The apple component
function Apples(props){
    return(
        <div className="promo-section">
        <div>
        <h2>These apples are: {props.color}</h2>
        </div>
       <div>
       <h3>There are {props.number} apples.</h3>
       </div>
        </div>

    );
};

// The pear component
function Pears(props){
    return(
        <h2>I don't like pears but {props.friend} does</h2>
    );
};

//The bag component
function Bag(props) {
    const bag = {
        padding: '2px',
        border: '1px solid gray',
        background: '#fff',
        margin: '20px 0'
    }
return (
<div style={bag}>
{props.children}
</div>
    )
}

export default Bag;
```
Here is how to render the Bag component with the Apples components as its _props.children_
``` javascript
<Bag children={<Apples color="yellow" number="5"/>}>
```
Here is how to render the bag component with the Pears component as its _props.children_
``` javascript
<Bag children = {<Pears friend="Peter">}>
```

## JSX and Arrow functions
Consider the following function declaration.
``` javascript
function Nav(props){
    return (
        <ul>
        <li>{props.first}</li>
        </ul>
    )
}
```
The function can also be written like this using arrow function syntax
``` javascript
const Nav = props => {
    return (
         <ul>
        <li>{props.first}</li>
        </ul> 
    )
}
```
Note that the parenthesis in arrow functions can be dropped if there's a single paramenter that the function accepts, like in this case, (props). For any number of parameters other than a single parameter, using the parenthesis is compulsory. The following is the arrow function syntax:
``` javascript
const example = () => {}
```

## Data and state
### Event listeners
React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.
For example: 
``` javascript
<button onClick={activateLasers}> Activate Lasers</button>
```
Below is an example using the onClick event handler:
``` javascript
function Button(){
    const clickHandler = ()=> {
        console.log ('You clicked me!');
    }

    return (
        <>
       <button onClick ={clickHandler}>Learn More</button>
       </>
        
    );
};

export default Button;
```
## Parent-child data flow
Assuming that we have two components, _Promo and PromoHeading_, Where the _PromoHeading_ component is called from within the _Promo_ component as shown below:
``` javascript
function Promo (){
    return(
        <div> 
        <PromoHeading/>
        </div>
    )
}
```
This makes Promo the parent component and PromoHeading the child component.
Similarly, data can be passed from the parent to the child component in the following way:

``` javascript
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