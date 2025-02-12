import React, {useState} from 'react';
import './LoginForm.css';
import {Button} from "../button";
import {RegistrationRequest} from "../../types/auth.ts";

type PropsType = {
    onRegistration: (request: RegistrationRequest) => void;
    error?: string;
}

export const RegistrationForm = ({error, onRegistration}: PropsType) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onRegistration({email, fullName, password});
    };

    return (
        <div className="login-container">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Полное имя"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Почта"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль"
                        required
                    />
                </div>
                <Button type="submit">Зарегистрироваться</Button>
            </form>
        </div>
    );
};
