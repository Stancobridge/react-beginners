import { CalculatorButton } from "./CalculatorButton";

export const CalculatorNumberButtons = ({ onCalculate, onNumberClicked }) => {
  //
  return (
    <div>
      <CalculatorButton onClick={() => onNumberClicked(1)}>1</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(2)}>2</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked("3")}>
        3
      </CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(4)}>4</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(5)}>5</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(6)}>6</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(7)}>7</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(8)}>8</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(9)}>9</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClicked(0)}>0</CalculatorButton>

      <CalculatorButton onClick={onCalculate} className="w-[140px]">
        =
      </CalculatorButton>
    </div>
  );
};
