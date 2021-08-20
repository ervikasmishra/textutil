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
    }

    const lowerCase =()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <h4 className="heading">{props.heading}</h4>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handlOnchange} id="text" cols="30" rows="10"></textarea>
            </div>
            {/* <div className="m-1" id="moreResult"></div> */}
            <button className="btn btn-primary m-1" onClick={upperCase}>Convert to upper case</button>
            <button className="btn btn-primary m-1" onClick={lowerCase}>Convert to lower Case</button>

            <div className="container my-3">
                <h2>More summary</h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

        
    )
}
