// import { waitForElementToBeRemoved } from '@testing-library/react';
import React , {useState} from 'react'


export default function Form(props) {

    const handlOnchange = (event)=>{
        // console.log("handleOnChange");
        setText(event.target.value);
    }
    const upperCase = ()=>{
        // console.log("UpperCase has been clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert('Text converted to uppercase', 'success');
    }

    const lowerCase =()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Text converted to lowercase', 'success');
    }

    const capatalize = () =>{
        const lower = text.toLowerCase();
        let cap =  lower.charAt(0).toUpperCase() + lower.slice(1);
        setText(cap);
        props.showAlert('text capatalize', 'success');
    }
    const copyAll =()=>{
        let text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text copied', 'success');
    }

    const clearAll =()=>{
        
        setText('');
        props.showAlert('Text clear', 'danger');
    }

    const [text, setText] = useState('');

    return (
        <>
            <h4 className="heading">{props.heading}</h4>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handlOnchange}  id="mytext" cols="30" rows="10" style={{backgroundColor:props.mode ==='dark'?'#495057':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={upperCase}>Convert to upper case</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={lowerCase}>Convert to lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={capatalize}>Capatalize</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={copyAll}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={clearAll}>Clear</button>

            <div className="container my-3">
                <h2>More summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text:"Nothing to preview"}</p>
            </div>
        </>

        
    )
}


