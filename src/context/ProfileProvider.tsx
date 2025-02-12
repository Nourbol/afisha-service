import React, {useEffect, useState} from "react";
import {getAuthenticatedUser, login as sendLoginRequest, register} from "../service/auth.ts";

import {RegistrationRequest} from "../types/auth.ts";
import {HttpHeader} from "../constants/http";
import {clearDefaultHeader, setAuthorizationHeader} from "../service";
import {ProfileContext} from "./profileContext.ts";

const TOKEN_KEY = 'TOKEN';

export type Profile = {
    id?: string;
    fullName?: string;
    email?: string;
    verified?: boolean;
    authenticated: boolean;
}

export const ProfileProvider = ({children}: { children: React.ReactNode }) => {
    const [profile, setProfile] = useState<Profile>({
        authenticated: false
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = localStorage.getItem(TOKEN_KEY);

            if (token) {
                setAuthorizationHeader(token);
                getAuthenticatedUser()
                    .then((response) => setProfile({...response, authenticated: true}));
            }
        }
        loadToken();
    }, []);

    const onLogin = async (email: string, password: string) => {
        try {
            const response = await sendLoginRequest(email, password);
            const token = response.token;

            setAuthorizationHeader(token);

            getAuthenticatedUser()
                .then((response) => setProfile({...response, authenticated: true}));

            localStorage.setItem(TOKEN_KEY, token)
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const onLogout = async () => {
        localStorage.removeItem(TOKEN_KEY);
        clearDefaultHeader(HttpHeader.AUTHORIZATION);

        setProfile({
            authenticated: false
        })
    };

    const onRegister = async (request: RegistrationRequest) =>
        register(request)
            .then((response) => setProfile({...response, authenticated: false}))

    const value = {
        onRegister,
        onLogin,
        onLogout,
        profile
    };

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
};
