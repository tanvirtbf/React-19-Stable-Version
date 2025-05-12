import "./style.css";
import Text from "./components/text";
import Tag from "./components/tag";
import Button from "./components/button";
import Input from "./components/input";

const WordGuessingGame = () => {
  return (
    <div>
        <Input /> &nbsp;
        <Input /> &nbsp;
        <Input /> &nbsp;
        <Input /> &nbsp;
      <Button
        type={Button.Type.CIRCULAR}
        onClick={() => console.log("Press 1")}
        label={"K"}
      />
      <Button
        type={Button.Type.ROUNDED}
        onClick={() => console.log("Press 2")}
        label={"=>"}
      />
      <Tag label={"Score"} />
      <Text text="Apple" type={Text.StyleType.ANSWER_HINT} />
      <br />
      <Text text="My Question" type={Text.StyleType.QUESTION_TITLE} />
      <br />
      <Text text="Score" type={Text.StyleType.SCORE} />
    </div>
  );
};

export default WordGuessingGame;
