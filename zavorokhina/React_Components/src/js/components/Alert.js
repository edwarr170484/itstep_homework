// Alert
// Описание: Компонент уведомлений.
// Требования: - тип ( success , error , warning ) - текст сообщения
// Ожидаемые навыки: - динамические классы
/*********************************************************************************************/

import React, { useState } from 'react';
// import { useState, useEffect } from 'react';


// export default function SimpleAlert() {
//   const showAlert = () => {
//     window.alert('Это простое оповещение!');
//   };

//   return <button onClick={showAlert}>Показать alert</button>;
// }

const Alert = ({ type = 'info', title, message, onClose }) => {
    const [visible, setVisible] = useState(true);

    const closeAlert = () => {
        setVisible(false);
        if (onClose) onClose();
    };

    if (!visible) return null;

    // Define color schemes per type
    const typeStyles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: '✅',
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: '❌',
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: '⚠️',
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: '🛈',
        },
    };

    const styles = typeStyles[type];

    return (
        <div
            role="alert"
            aria-live="assertive"
            className={`alert alert-${type} ...`}
        >
            <span className="text-2xl">{styles.icon}</span>
            <div className="flex-1">
                {title && <h3 className="font-semibold text-sm">{title}</h3>}
                <p className="text-sm mt-1">{message}</p>
            </div>
            {onClose && (
                <button
                    onClick={closeAlert}
                    className="text-gray-400 hover:text-gray-600 absolute top-2 right-2 text-xl"
                    aria-label="Close alert"
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default Alert;