// Button:
// Реализуйте компонент кнопки.
// Требования: - принимает label (текст кнопки) - принимает onClick - поддерживает disabled
// Ожидаемые навыки: - работа с props - обработка событий
/*********************************************************************************************/

import React from "react";
import { useState } from "react";

const style = {
  buttonStyles: {
    color: 'white',
    backgroundColor: 'green',
    borderRadius: '5px'
  }
}

// export default class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // return <button onClick={this.props.handleClick} style={{color:'red'}}>{this.props.label}</button>;
//     return <button onClick={this.props.handleClick} style={style.buttonStyles}>{this.props.label}</button>;
//   }
// }

export default function Button({label, handleClick, className, disabled = null, myStyle }){
    return (<button className={className} onClick={handleClick} disabled={disabled} style={myStyle || style.buttonStyles}>{label}</button>);
}

// function Button({startCount, btnClass, step}) {
//   const [count, setCount] = useState(startCount);
//   let buttonClass = "btn-danger";

//   function handleClick() {
//     setCount(count + step);
//   }

//   return (
//     <button className={btnClass} onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default Button;
