import React, { useState } from "react";

export default function About(props) {
  
  //State variable for button color change is made
    return (
    <>
      <div className="container my-4" >
        <h1 className={`container text-${props.mode==='light'?'dark':'light'}`}>About Us</h1>
        <div className={`container`} id="accordionExample">
          <div className={`accordion-item`}  style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}
               
              >
               <strong>Analyse your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextUtils gives you a way to analyse your text quickly and efficiently.Be it word count ,character count or copying the text
              
              </div>
            </div>
          </div>
          <div className="accordion-item"  style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. textUtils reports the number of words and characters. thus it is suitable for writing text/character limit. 
                  </div>
            </div>
          </div>
          <div className="accordion-item"  style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  color:props.mode==='light'?'black':'white',
                  backgroundColor:props.mode==='light'?'white':'#283d64'
                }}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               This word counter software works in any web browsers such as Chrome,firefox, Internet Explorer etc. It suits to count characters in facebook,blog,books,excel document,essays etc.
                 </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
