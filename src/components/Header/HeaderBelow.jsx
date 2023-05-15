import { useEffect, useState } from "react";
import { Logo } from "../../svg/Logo";

export const HeaderBelow = ({ onSearch }) => {
  const [enteredValue, setEnteredValue] = useState("");

  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <Logo />
      <input
        className="flex-1 p-2 outline-none bg-gray-50"
        type="text"
        onChange={onChangeHandler}
      />
      <button
        onClick={() => {
          onSearch(enteredValue);
        }}
      >
        Search
      </button>
      <div>user section</div>
    </div>
  );
};
