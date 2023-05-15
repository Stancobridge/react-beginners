import { CalculatorButton } from "./CalculatorButton";
import { CalculatorMajorButtons } from "./CalculatorMajorButtons";
import { CalculatorNumberButtons } from "./CalculatorNumberButtons";
import { CalculatorScreen } from "./CalculatorScreen";
import { useCalculator } from "./hook/useCalculator";

export const Calculator = () => {
  const {
    answer,
    expression,
    calculate,
    handleNumberClick,
    handleOperatorClick,
    clear,
  } = useCalculator();

  return (
    <div className="shadow-sm border border-gray-50 rounded p-2 w-2/12 m-auto mt-10">
      <CalculatorScreen answer={answer} expression={expression} />
      <div>
        <CalculatorMajorButtons onOperatorClick={handleOperatorClick} />
        <CalculatorNumberButtons
          onCalculate={calculate}
          onNumberClicked={handleNumberClick}
        />
        <CalculatorButton onClick={clear} className={"w-full"}>
          clear
        </CalculatorButton>
      </div>
    </div>
  );
};
