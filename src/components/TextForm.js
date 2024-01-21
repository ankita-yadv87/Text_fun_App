import React, { useState } from 'react';


function TextForm(props){


 const [text, setText] = useState("");

 const handleUpClick = () => {
        let newtext = text.toUpperCase();
   setText(newtext);
   props.showAlert("Converted to UpperCase", "Success");
   
  }
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "Success");
  };
  

    const handleOnChange = (Event) => {
        setText(Event.target.value);
    };


    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3 ">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#05152c" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>
              Convert to LowerCase
            </button>
          </div>
        </div>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h3>Your text summary</h3>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p> {0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>
            {" "}
            {text.length>0 ? text : "Enter something to preview here"}
          </p>
        </div>
      </>
    );
};

export default TextForm;
