import React, { useState } from 'react';

//here text is a state variable of React
export default function TextForm(props) {
   const handleClearClick=()=>
   {
       setText('');
       props.alertFunction('Success ! Your Clearing the text functionality worked','success');
   }
    const handleUpClick=()=>
    {
        console.log('Uppercase was clicked');
        setText(text.toUpperCase());
        props.alertFunction('Success ! Your UpperCase functionality worked','success');
    }
    const handleLoClick=()=>
    {
        console.log('Lowercase was clicked');
        setText(text.toLowerCase());
        props.alertFunction('Success ! Your LowerCase functionality worked','success');
    }
    const handleCopyText=()=>
    {
        var text=document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alertFunction('Success ! You copied the text successfully','success');
    }
    const handleExtraSpaces=()=>
    {
        let spaceArray=text.split(/[ ]+/);
        //text splited into array if single or more spaces is found
        setText(spaceArray.join(" "));

        props.alertFunction('Success ! You removed extra spaces successsfully','success');
    }
    //When any event is triggered an event object automatically arises 
    const handleUpChange=(event)=>
    {
        console.log('Upchange was clicked');
        console.log(event.target.value);
        //Here event.target refers to the text area and .value refers to the value written by the user
        setText(event.target.value);
    }
    //useState will return an array that will contain two values corresponding to text and setText
    const [text, setText] = useState('');
  return (
      <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <div className="form-group">
        <h1 className="my-3">{props.heading}</h1>
        <textarea className="form-control" id="text" rows="8" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#363454':'white'}} onChange={handleUpChange} value={text}></textarea>
        <button disabled={text.length==0} className='btn btn-primary my-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length==0} className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length==0} className='btn btn-primary my-2 mx-2' onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length==0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length==0} className='btn btn-secondary my-2 mx-0' onClick={handleClearClick}>Clear Text</button>
        </div>
      </div> 
       <div className={`container text-${props.mode==='light'?'dark':'light'} my-3`}>
        <h2>Your Text Summary</h2>
        <p>{text===''?0:text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>This text can be read in {text===''?'0.000' :0.008 * text.trim().split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
       </> 
  )
}
