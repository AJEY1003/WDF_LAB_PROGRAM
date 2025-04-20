import React, { useState } from "react";

function App() {
  const [round, setRound] = useState(0);
  const [roundedValue, setRoundedValue] = useState(null); 
  const [area,setArea] = useState({
    length:0,
    breadth:0,
  });
  const[calculate,setCalculate]=useState(0);
  const [sin,setSin]=useState(0);
  const [cos,setCos]=useState(0);
  const [tan,setTan]=useState(0);
  const [angle,setAngle]=useState(0);
  function handleRound() {
    const rounding = Math.round(round);
    setRoundedValue(rounding); 
  }
  function CalculateArea(){
    const result = area.length*area.breadth;
    setCalculate(result);
  }
  function CalculateSin(){
    const value=angle*(Math.PI/180);
    const result = Math.sin(value);
    setSin(result);
  }
  function CalculateCos(){
    const value=angle*(Math.PI/180);
    const result = Math.cos(value);
    setCos(result);
  }
  function CalculateTan(){
   const value=angle*(Math.PI/180);
  const result=Math.tan(value);
  setTan(result);
}

  return (
    <div>
      <h1>Scientific Calculator</h1>
      <br />
      <label>Enter a number to round:</label>
      <br />
      <input
        type="number"
        onChange={(e) => setRound(parseFloat(e.target.value))}
      />
      <br />
      <button onClick={handleRound}>Round</button>
      <br />

      {roundedValue !== null && (
        <h2>Rounded Value: {roundedValue}</h2> 
      )}
    <br />
    <label>Enter length:</label>  
    <input type="number" onChange={(e) => setArea({ ...area, length: parseFloat(e.target.value) })} /><br></br>
    <label>Enter breadth:</label><br></br>
    <input type="number" onChange={(e) => setArea({ ...area, breadth: parseFloat(e.target.value) })} /><br></br>
    <button onClick={CalculateArea}>Calculate Area</button><br></br>
    {calculate !== 0 && (
      <h2>Area:{calculate}</h2>)}<br></br>
      <label>Enter angle:</label><br></br>
      <input type="number" onChange={(e) => setAngle(parseFloat(e.target.value))} /><br></br>
      <button onClick={CalculateSin}>Calculate Sin</button><br></br>
      <button onClick={CalculateCos}>Calculate Cos</button><br></br>
      <button onClick={CalculateTan}>Calculate Tan</button><br></br>
      <h1>sin angle:{sin}</h1>
      <h1>cos angle:{cos}</h1>
      <h1>Tan angle:{tan}</h1>
    </div>
  );
}

export default App;
