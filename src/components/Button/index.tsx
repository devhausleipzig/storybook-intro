import React from "react";
import { Button as CUIButton, ButtonProps } from "@chakra-ui/react";

export const Button = ({ children, ...props }: ButtonProps) => <CUIButton {...props}>{children}</CUIButton>;
