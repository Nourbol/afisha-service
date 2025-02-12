export type AuthenticationToken = {
    token: string;
    expireAt: Date;
};

export type RegistrationRequest = {
    fullName: string;
    email: string;
    password: string;
};

export type UserResponse = {
    id: string;
    fullName: string;
    email: string;
};
