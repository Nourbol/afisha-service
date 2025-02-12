import React, {useState} from 'react';
import './LoginForm.css';
import {Button} from "../button";

type PropsType = {
    onLogin: (email: string, password: string) => void;
    error?: string;
}

export const LoginForm = ({error, onLogin}: PropsType) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login-container">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-inputs">
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
                </div>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    );
};
