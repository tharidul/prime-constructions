import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'default' | 'light' | 'dark' | 'accent';
}

const backgrounds = {
    default: 'bg-background',
    light: 'bg-white',
    dark: 'bg-charcoal text-white',
    accent: 'bg-amber-50',
};

export function Section({
    children,
    className = '',
    id,
    background = 'default'
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 lg:py-32 ${backgrounds[background]} ${className}`}
        >
            {children}
        </section>
    );
}
