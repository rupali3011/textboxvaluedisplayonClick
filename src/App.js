import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [text, settext] = useState("");
  const [dis, setdis] = useState(event.target.value);
  function textPrint(event) {
    settext(event.target.value);
  }
  function print() {
    setdis(text);
  }
  return (
    <div className="App">
      <h2>Hello {dis}</h2>
      <input type="text" onChange={textPrint} />
      <button onClick={print}>submit</button>
    </div>
  );
}
