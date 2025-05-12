import "./style.css";
import Text from "./components/text";

const WordGuessingGame = () => {
  return (
    <div>
      <Text text="Apple" type={Text.StyleType.ANSWER_HINT} />
      <br />
      <Text text="My Question" type={Text.StyleType.QUESTION_TITLE} />
      <br />
      <Text text="Score" type={Text.StyleType.SCORE} />
    </div>
  );
};

export default WordGuessingGame;
