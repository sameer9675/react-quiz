function Option({ question, dispatch, answer }) {
  const hasAnswered = answer != null;
  function optionCLickHander(option) {
    dispatch({ type: "newAnswer", payload: option });
  }

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option 
            ${answer === index ? "answer" : ""}
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
          key={option}
          disabled={hasAnswered}
          onClick={() => optionCLickHander(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
