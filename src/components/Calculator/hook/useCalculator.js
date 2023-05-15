import { useState } from "react";

export const useCalculator = () => {
  const [answer, setAnswer] = useState();
  const [expression, setExpression] = useState(0);

  const calculate = () => {
    setAnswer(eval(expression));
  };

  const handleNumberClick = (value) => {
    const num = Number(value);

    if (isNaN(num)) {
      throw new Error("Invalid number");
    }

    setExpression((old) => {
      if (old == 0) {
        return value;
      }
      old += `${value}`;
      return old;
    });
  };

  const handleOperatorClick = (operator) => {
    const acceptedOperators = ["+", "-", "/", "*"];
    const isOperatorAcceptable = acceptedOperators.find(
      (op) => operator === op
    );

    if (!isOperatorAcceptable) {
      throw new Error("Invalid operator");
    }
    setExpression((old) => {
      old += `${operator}`;
      return old;
    });
  };

  const clear = () => {
    setAnswer(null);
    setExpression(0);
  };

  return {
    answer,
    expression,
    calculate,
    handleNumberClick,
    handleOperatorClick,
    clear,
  };
};
