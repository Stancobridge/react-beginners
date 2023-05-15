export const CalculatorButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded bg-gray-700 text-white px-4 m-1 py-1 min-w-[66px] text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
