import React, { useState } from "react";
import Logo from "./logo";

function Header(props) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    // alert(inputText);
    props.onSearch(inputText);
  };

  const submitSearchByEnter = (event) => {
    if (event.keyCode === 13) {
      submitSearch(event);
    }
  };

  return (
    <header className="header">
      <Logo />
      <input
        type="text"
        className="header__input"
        onChange={handleInputChange}
        value={inputText}
        placeholder="search"
        onKeyDown={submitSearchByEnter}
      />
      <button
        className="header__btn"
        placeholder="search"
        onClick={submitSearch}
      >
        search
      </button>
    </header>
  );
}

export default Header;
