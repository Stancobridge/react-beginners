export const CalculatorScreen = ({ answer, expression }) => {
  return (
    <div className="bg-green-950/60 rounded h-16">
      <p className="text-white font-bold p-1 m-0">{expression}</p>
      <p className="text-white font-bold p-1 m-0 text-right">
        {answer ? `= ${answer}` : null}
      </p>
    </div>
  );
};
