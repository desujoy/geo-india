import { guesslist } from "./lists";
import { useState } from "react";

const McqQuestion = ({ options, correctAnswer, question, handleScore }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    const isCorrectOption = selectedOption === correctAnswer;
    if (isCorrectOption) {
        handleScore(10);    
    } else {
        handleScore(-5);
    }
    setIsCorrect(isCorrectOption);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedOption === option
                  ? isCorrect
                    ? "lightgreen"
                    : "grey"
                  : "white",
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
          Your answer is {isCorrect ? "correct" : "incorrect"}: {selectedOption}
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
