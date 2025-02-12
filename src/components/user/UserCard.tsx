import './UserCard.css';
import React from "react";

type PropsType = {
    fullName: string;
    onLogout?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserCard = (
    {
        fullName,
        onLogout = () => {},
        ...attributes
    }: PropsType) => {
    return (
        <div className="user-card" {...attributes}>
            <p>{fullName}</p>
            <a onClick={onLogout}>Выйти</a>
        </div>
    );
};
