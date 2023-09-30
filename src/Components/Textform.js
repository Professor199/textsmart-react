import React,{useState} from 'react'

export default function Textform(props) {
     const  handleUpClick =()=>{
        // console.log("upper case was clicked")
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleLowClick = ()=>{
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick = ()=>{
        setText("")
        props.showAlert("Text cleared","success")
    }
    const speak = () => {
    let msg = new SpeechSynthesisUtterance(Text);
    msg.Text = Text;
    window.speechSynthesis.speak(msg);
    }
    const handleCopy=()=>{
      let Text = document.getElementById("My Box");
      Text.select();
      Text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(Text.value);
      props.showAlert("Copied to clipboard","success")
    }
    const handleExtraspaces =()=>{
        let myText = Text.split(/[ ]+/);
        setText(myText.join(" "))
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [Text, setText] = useState("");
  return (
    <>
    <div className={`container text-${props.textMode}`}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} id="My Box" rows="6"></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
  <button type="submit" onClick={speak} className="btn btn-primary mx-2">Speak</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>

  </div>
    </div>
    <div className={`container my-1 text-${props.textMode}`}>
        <h1>Your text summary</h1>
        <p>{Text.split(" ").length-1} words and {Text.length} characters</p>
        <p>{0.008*(Text.split(" ").length-1)} minutes to read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
