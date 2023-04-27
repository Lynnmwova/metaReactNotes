import {useState} from 'react';

function InputComponent(){
    const [InputText, setText] = useState('Hello There!');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
<>
    <input value={InputText} onChange={handleChange}/>
    <p>You typed:{InputText}</p>
    <button onClick={()=> setText('Hello there!')}>Reset</button>
</>
    )
}

export default InputComponent


/* Key notes:
The state variable inputText and setText methods are used to set the current text that is typed. The use state hook is initialized at the beginning of the component.
 By default, the input text is set to Hello there! As the use types, the handleChange function reads the latest input values from the browser's input DOM element and calls the setFunction to update the local state of inputText.


*/