import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 && height === 0) {
      alert("Enter a valid number");
    } else {
      let bmi = (weight / (height * height)) * 730;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  const reload=(e)=>{
    e.preventDefault();
    window.location.reload();
  }
  return (
    <div className="app">
      <div className="container">
        <label>BMI Calculator</label>
        <form onSubmit={calBmi}>
          <div>
            <p>Weight(lbs)</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload}>Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
