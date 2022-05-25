import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('msg');
  };

  return (
    <form ONSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />{" "}
    </form>
  );
};
