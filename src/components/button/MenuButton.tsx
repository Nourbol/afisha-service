import burgerButtonIcon from '../../assets/burger-button-icon.svg'
import './Button.css'
import {Icon} from "../icon/Icon.tsx";
import React from "react";
import {Button} from "./Button.tsx";

export const MenuButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <Button className="burger-button" {...props}>
            <Icon src={burgerButtonIcon} name="burger icon" />
        </Button>
);
