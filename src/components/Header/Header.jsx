import { useState } from "react";
import { HeaderBelow } from "./HeaderBelow";
import { HeaderUpper } from "./HeaderUpper";

export const Header = () => {
  const [text, setText] = useState("");

  const onSearchHandler = (e) => {
    setText(e);
  };

  return (
    <div className="w-[80%] m-auto">
      <HeaderUpper />
      <h1>{text}</h1>
      <HeaderBelow onSearch={onSearchHandler} />
    </div>
  );
};
