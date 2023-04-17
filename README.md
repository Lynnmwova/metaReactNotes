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

### Using props in components. 
