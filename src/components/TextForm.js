import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Data copied to clipboard", "success")
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
    
    return (
        <>
            <div className="container mb-3 mt-4" style={{color: props.mode === 'light'?'#042743':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"
                style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'#042743':'white'}} ></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={removeExtraSpace}>Remove Extra spaces</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container mb-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
                <h2>Your Text Summary</h2>
                {/* <p> {text.trim() === '' ? 0 : text.trim().split(' ').length} words and {text.length} characters </p> */}
                
                <p >{((
                    text.trim().split(" ")).filter(function (element) { 
                        return element !== "";
                    })).length} words and {text.length} characters 
                </p>
                
                <p> {Math.ceil(text.trim().split(' ').length * 0.008)} minute(s) read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>

            </div>  
        </>
    )
}