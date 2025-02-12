import './Button.css';
import React from "react";

export const Button =
    (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className="text-button" {...props} />
);
