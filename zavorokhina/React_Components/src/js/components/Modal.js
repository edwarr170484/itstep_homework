// Modal
// Описание: Модальное окно.
// Требования: - принимает isOpen - принимает onClose - отображает children
// Ожидаемые навыки: - условный рендеринг - переиспользуемые компоненты
/*********************************************************************************************/

import React, { useState } from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div
                /* e.stopPropagation() предотвращает закрытие при клике внутри модального окна: */
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: '#FFBB61',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    maxWidth: '500px',
                    width: '90%'
                }}
            >
                {children}
            </div>
        </div>
    );
};