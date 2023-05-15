import { CalculatorButton } from "./CalculatorButton";

export const CalculatorMajorButtons = ({ onOperatorClick }) => {
  return (
    <>
      <CalculatorButton onClick={() => onOperatorClick("+")}>
        +
      </CalculatorButton>
      <CalculatorButton onClick={() => onOperatorClick("-")}>
        -
      </CalculatorButton>
      <CalculatorButton onClick={() => onOperatorClick("/")}>
        /
      </CalculatorButton>
      <CalculatorButton onClick={() => onOperatorClick("*")}>
        *
      </CalculatorButton>
    </>
  );
};
