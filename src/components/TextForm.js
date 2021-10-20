  import { useState } from "react"

  export default function TextForm(props) {

    const handleUpClick = ()=>{
    //  console.log('UperCase button clicked' + Text);
      let newText = Text.toUpperCase();
      setText(newText);
    }
    const handleLoClick = ()=>{
      //  console.log('UperCase button clicked' + Text);
        let newText = Text.toLowerCase();
        setText(newText);
      }

      const handleClearClick = ()=>{
        //  console.log('UperCase button clicked' + Text);
          let newText = '';
          setText(newText);
        }
    const handleOnChange = (event)=>{
    //   console.log('On change');
      setText(event.target.value);
    }
    const [Text, setText ] = useState(''); 
  
      return (
        <>
          <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear All</button>

  </div>
  <div className="container my-3">
    <h2>Text Summary</h2>
    <p><b>{Text.split(" ").length}</b> Words and <b>{Text.length}</b> Characters</p>
    <p><b>{0.008 * Text.split(" ").length}</b> Minutes to Read this Data</p>
    <h2>Preview</h2>
    <p>{Text}</p>
  </div>
  </>

      )
  }
