import React, { useState } from 'react';

export default function Textform(props) {
    const handleclick = () => {
        console.log("Uppercase was clicked ");
        let newText = text.toUpperCase();
        seText(newText);
    }
    const handlelowerclick = () => {
        let newText = text.toLowerCase();
        seText(newText);
    }
    const handleonChange = (event) => {
        console.log("On change is clicked");
        seText(event.target.value);
    }
    const [text, seText] = useState(" Enter text here ");
    // text = "new text"; //Wrong way
    // seText("new text");//correct way
    return (
        <>

            <div>
                <div className="mb-3">
                    <label for="Text-b" className="form-laoxbel">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleonChange} id="" rows="8"></textarea>
                </div>
                <div >
                    <button className='btn btn-primary m-3' onClick={handleclick}>Convert to Upper Case</button>
                    <button className='btn btn-primary ' onClick={handlelowerclick}>Convert to Lower Case</button>
                </div >
            </div>
            <div className='container'>
                <h1>Your text Summary</h1>
                <p>{text.split(' ').filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(' ').length - 1)} sec is the average time taken to read this </p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
