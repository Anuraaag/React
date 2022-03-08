import React, {useState} from 'react'
import '../App.css'

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        setText("")
    }

    const copyText = () => {
        if (text.length < 1) props.showAlert("Enter some text to copy", "warning")
        else{
            navigator.clipboard.writeText(text)
            props.showAlert("Data copied to clipboard", "success")    
        }
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const removeNewLines = () => setText(text.trim().replace( /\n/g, " " ))

    const [text, setText] = useState("")
    
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
                <button className="btn btn-primary mt-3 mx-1" onClick={removeNewLines}>Remove New lines</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container mb-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
                <h2>Your Text Summary</h2>

                {/* <p>{((text.trim().replace( /\n/g, " " ).split(" ")).filter( element => element !== "" )).length} words 
                and {text.length} characters </p> */}

                {/* Using regex for any kind of space. And filtering out strings which aren't alphanumeric */}
                <p>{((text.trim().split(/\s+/)).filter( element => (/^[a-z0-9]+$/i).test(element) )).length} words 
                and {text.length} characters </p>
   
                <p> { text.length > 0 ? Math.ceil(text.trim().split(' ').length * 0.008) : 0} minute(s) read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>

            </div>  
        </>
    )
}