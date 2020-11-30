import React, { useState } from "react";

function Contact(props) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const submitContact = (event) => {
    props.onAdd(inputText);
    event.preventDefault();
    setInputText("");
    document.querySelector(".inputName").focus();
    alert(inputText);
  };

  const submitContactByEnter = (event) => {
    if (event.keyCode === 13) {
      submitContact(event);
    }
  };

  return (
    <section>
      <span>Contact</span>
      <input
        type="text"
        className="inputName"
        placeholder="name"
        autoComplete="off"
        onChange={handleInputChange}
        onKeyDown={submitContactByEnter}
        value={inputText}
      ></input>
      {/* <input type="text" placeholder="email"></input>
    <input type="text" placeholder="title"></input>
    <input type="text" placeholder="content"></input> */}
      <button onClick={submitContact}>submit</button>
    </section>
  );
}

export default Contact;
