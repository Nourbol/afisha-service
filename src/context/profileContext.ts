import {createContext, useContext} from "react";
import {RegistrationRequest} from "../types/auth.ts";
import {Profile} from "./ProfileProvider.tsx";

type ProfileProps = {
    profile?: Profile;
    onRegister?: (request: RegistrationRequest) => Promise<void>;
    onLogin?: (email: string, password: string) => Promise<void>;
    onLogout?: () => Promise<void>;
}

export const ProfileContext = createContext<ProfileProps>({})

export const useProfile = () => useContext(ProfileContext);
