import { useState } from "react";
import "./styles.css";

const App = () => {
  const [month, setMonth] = useState("1");
  const [date, setDate] = useState("yyyy-MM-dd");
  const [text, setText] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleOptionsChange = (e) => {
    setMonth(e.target.value);
  };

  const clickHandler = () => {
    if (date === "yyyy-MM-dd") {
      setText("Please select a valid date");
    } else {
      let arrDate = date.split("-");
      let dateNum = Number(arrDate.join(""));
      let monthNum = Number(month);

      if (dateNum % monthNum === 0) {
        setText("Hurray! You got yourself a lucky birthdate 🥳🥳🎉🎉");
      } else {
        setText(
          "Oops! Your birthdate is not lucky. But no worries, doesn't matter"
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="headings">
        <p>We are not storing your data so rest easy 🙂</p>
        <h1>Is your birthdate lucky?</h1>
        <h1>Let's see 👀</h1>
      </div>
      <div className="inputs">
        <div className="date flex">
          <h4>Select your birthdate: </h4>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="number flex">
          <label htmlFor="months">Select your favourite month:</label>
          <select
            name="months"
            id="months"
            value={month}
            onChange={handleOptionsChange}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button onClick={clickHandler}>Submit</button>
      <div className="result">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
