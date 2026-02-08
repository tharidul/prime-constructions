import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children: ReactNode;
    as?: 'button';
    href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
    children: ReactNode;
    as: 'link';
    href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-charcoal text-white hover:bg-charcoal-800 active:bg-charcoal-950',
    secondary: 'bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal-50',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    as = 'button',
    ...props
}: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-300 ease-out-expo ${variants[variant]} ${sizes[size]} ${className}`;

    if (as === 'link') {
        const { href } = props as ButtonAsLink;
        return (
            <Link to={href} className={baseClasses}>
                {children}
            </Link>
        );
    }

    const buttonProps = props as Omit<ButtonAsButton, 'children' | 'as' | 'variant' | 'size' | 'className'>;
    return (
        <button className={baseClasses} {...buttonProps}>
            {children}
        </button>
    );
}
