// Toggle
// Описание: Переключатель состояния.
// Требования: - хранит boolean-состояние - отображает "ВКЛ" / "ВЫКЛ"
// Ожидаемые навыки: - условный рендеринг
/*********************************************************************************************/
import React, { useState } from 'react';


function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={isToggled ? 'active' : 'inactive'}>
        <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
        </button>
    </div>
  );
}

export default ToggleButton;