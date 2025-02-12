import {API_SERVICE} from "./index.ts";
import {AuthenticationToken, RegistrationRequest, UserResponse} from "../types/auth.ts";

export const register = async (request: RegistrationRequest): Promise<UserResponse> =>
    await API_SERVICE.post('/v1/users/register', request).then((response) => response.data);

export const login = async (email: string, password: string): Promise<AuthenticationToken> =>
    await API_SERVICE.post('/v1/users/login', {email, password}).then((response) => response.data);

export const getAuthenticatedUser = async (): Promise<UserResponse> =>
    await API_SERVICE.get('/v1/users').then((response) => response.data);
