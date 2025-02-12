import React from "react";

type PropsType = {
    name: string,
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Icon = ({name, ...attributes}: PropsType) => (
    <img alt={name} {...attributes} />
);
