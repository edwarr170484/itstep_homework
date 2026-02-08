// Counter
// Описание: Счётчик с кнопками увеличения и уменьшения.
// Требования: - хранит значение в state - кнопки "+" и "−" - значение не может быть меньше 0
// (опционально)
// Ожидаемые навыки: - useState - обновление состояния
/*********************************************************************************************/

import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  let className = "btn-counter";

  const style = {
    buttonStylesPlus: {
      color: "white",
      backgroundColor: "orange",
      borderRadius: "5px",
    },
    buttonStylesMinus: {
      color: "white",
      backgroundColor: "grey",
      borderRadius: "5px",
    },
  };

  // const decrement = function () {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const increment = function () {
  //   if (count > 0) {
  //     setCount(count + 1);
  //   }
  // };

  return (
    <>
      <div className="counter">
        <Button
          className={"btn-counter"}
          label="-"
          myStyle={style.buttonStylesMinus}
          handleClick={() => handleClick("-")}
        />
        <input type="text" value={count} readOnly={true} />
        <Button
          className={"btn-counter"}
          label="+"
          myStyle={style.buttonStylesPlus}
          handleClick={() => handleClick("+")}
        />

        {/* <Button
          label="-"
          handleClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        />
        <input type="text" value={count} readOnly={true} />
        {/* <input type="number"/> */}
        {/* <Button label="+" handleClick={() => setCount(count + 1)} /> */}
      </div>
    </>
  );

  function handleClick(action) {
    if (action === "+") {
      setCount(count + 1);
    } else if (action === "-" && count > 0) {
      setCount(count - 1);
    }
  }
}
