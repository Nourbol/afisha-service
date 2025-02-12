import {useProfile} from "../context/profileContext.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegistrationRequest} from "../types/auth.ts";
import {RegistrationForm} from "../components/login/RegistrationForm.tsx";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const { onRegister } = useProfile();

    const [error, setError] = useState('');

    const handleRegistration = ({ email, fullName, password}: RegistrationRequest) => {
        if (!email || !password || !fullName) {
            setError('All fields are required.');
            return;
        }
        setError('');
        onRegister?.({ email, fullName, password })
            .then(() => navigate('/login'))
            .catch((error) => setError(JSON.stringify(error.response.data.data)));
    };

    return (
        <div className="page">
            <RegistrationForm onRegistration={handleRegistration} error={error}/>
        </div>
    );
};
