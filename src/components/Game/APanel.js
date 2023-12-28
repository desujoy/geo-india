import { guesslist } from "./lists";
import { useEffect, useState } from "react";

const delay = ms => new Promise(res => setTimeout(res, ms));

const McqQuestion = ({ options, correctAnswer, question, handleScore }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(null);
  };

  const handleSubmit = async () => {
    const isCorrectOption = selectedOption === correctAnswer;
    setIsCorrect(isCorrectOption);
    await delay(3000)
    if (isCorrectOption) {
        handleScore(10);    
    } else {
        handleScore(-5);
    }
    setIsCorrect(isCorrectOption);
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        textAlign: "center",
      
    }}>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedOption === option ? (isCorrect ? "lightgreen" : "lightcoral")  : "#fff595",
              borderRadius: "30px",
              padding: "10px",
              borderBlockColor: "black",
              borderBlockStyle: "solid",
              borderBlockWidth: "5px",
              width: "300px",
              alignSelf: "center",
              margin: "10px",
              textAlign: "center",
              listStyle: "none",
              fontWeight: "bold",
              fontSize: "20px",
              color: "indigo",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "12px",
        }}
        onClick={handleSubmit}
      >
        Submit Guess
      </button>
      {selectedOption && isCorrect !== null && (
        <p>
          Your answer was {isCorrect ? "correct" : "incorrect"}: {selectedOption}
        </p>
      )}
    </div>
  );
};

const APanel = (props) => {
  const find = props.map.replace(".gif", "").replace(/\d+/g, "");
  let value;
  props.correct.forEach((element) => {
    if (element.map === find) {
      value = element.value;
    }
  });
  const correctOption = guesslist[value - 1];
  const guesslist2 = guesslist.filter((item) => item !== correctOption);
  const randomOptions = [];
  randomOptions.push(correctOption);
  for (let i = 0; i < 3; i++) {
    randomOptions.push(
      guesslist2[Math.floor(Math.random() * guesslist2.length)]
    );
  }
  randomOptions.sort(() => Math.random() - 0.5);
  return (
    <McqQuestion
      options={randomOptions}
      correctAnswer={correctOption}
      question="What is the name of this state?"
      handleScore={props.handleScore}
    />
  );
};

export default APanel;
