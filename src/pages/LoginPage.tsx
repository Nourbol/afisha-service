import {LoginForm} from "../components/login/LoginForm.tsx";
import {useProfile} from "../context/profileContext.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { onLogin } = useProfile();

    const [error, setError] = useState('');

    const handleLogin = (email: string, password: string) => {
        if (!email || !password) {
            setError('Оба поля должны быть заполнены.');
            return;
        }
        setError('');
        onLogin?.(email, password)
            .then(() => navigate('/'))
            .catch((error) => setError(error.message));
    };

    return (
        <div className="page">
            <LoginForm onLogin={handleLogin} error={error}/>
        </div>
    );
};
