// Login Form
// Требования: - поля email и password - кнопка отправки - вывод данных в консоль при submit
// Ожидаемые навыки: - формы - обработка onSubmit
/*********************************************************************************************/

import React, { useState } from 'react';

export default function LoginForm() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Prevent the default browser form submission:
        e.preventDefault();
        console.log('Form submitted:', { email, password });
    };

    const handleSubmit = (e) => {
        // Prevent default browser page refresh:
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    // onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    // onChange={(e) => setPassword(e.target.value)} // Update password state on change
                    required
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}

// import TextInput from './TextInput';
// import Button from './Button';

// export default function LoginForm(){

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(event.target.elements);
//         console.log(event.target.elements[0].value);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             {/* <TextInput type="email" onChange={(event) => {setEmail(event.target.value)}}/> */}
//             <TextInput type="email" />
//             <TextInput type="password" />
//             <Button label="Login" />
//         </form>
//     )
// }