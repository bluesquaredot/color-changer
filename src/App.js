import React, { useState } from "react";
import "./style.css";
// import themes from './Themes'

export default function App() {
  const [bg, setBg] = useState(null);

  return (
    <div className={bg}>
      <button onClick={()=>setBg('bg-red')} >Red</button>
      <button onClick={()=>setBg('bg-blue')} >Blue</button>
      <button onClick={()=>setBg('bg-green')} >Green</button>
      <button onClick={()=>setBg('bg-black')} >Black</button>
      <button onClick={()=>setBg(null)} >Reset</button>
    </div>
  );
}
