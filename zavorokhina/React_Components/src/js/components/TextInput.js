// Text Input
// Контролируемое поле ввода.
// Требования: - принимает value - принимает onChange - отображает placeholder
// Ожидаемые навыки: - controlled components
/*********************************************************************************************/
import { useState } from "react";
import Paragraph from "./Paragraph";

const style = {
  input: {
    height: "60px",
    width: "400px",
    margin: "12px",
    borderWidth: "1px",
    padding: "10px",
    fontSize: "12px",
    borderColor: "gray",
  },
};

export default function TextInput({ placeholder, myStyle }) {
  const [value, setValue] = useState("");

  // Update state on every click:
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className="text-input"
        type="text"
        maxLength="60"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={myStyle || style.input}
      />
      <div className="output-field">
        <Paragraph>{value}</Paragraph>
      </div>
    </>
  );
}

// export default function TextInput({type="text", value, onChange}){
//   return (
//     <input type={type} defaultValue={value} onChange={onChange} />
//   )
// }
