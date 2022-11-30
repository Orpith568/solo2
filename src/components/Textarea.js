import React, { useState } from 'react';

export default function Textarea(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase!","success")
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowercase!","success")
    }

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value)
    }


const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!","success")
}

const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success")
}

const handleClearText =() =>{
    let newText = "";
    setText(newText)
    props.showAlert("Cleared text!","success")
}

    const [text, setText] = useState('Enter your text');

    return (
        <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" type="text" style= {{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': 'black'}} value={text} onChange={handleOnChange} rows="8"/>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Capital letter</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Small letter</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra space</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>


        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes to read </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text"}</p>
        </div>
        </>
  )
}
