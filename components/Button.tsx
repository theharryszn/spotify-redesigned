import React from 'react'

export type ButtonSize = "base" | "md" | "lg" | "sm" | "xl"

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: ButtonSize,
    loading? : boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props,ref) => {
    const { 
        size="base",
        children,
        className = "",
        loading="false",
        ...rest
    } = props;

    const classNameFromSize = `btn btn-${size}` + className; 

    return (
        <button className={classNameFromSize} ref={ref} {...rest}>{children}</button>
    )
});


Button.displayName = "Button"

export default Button
