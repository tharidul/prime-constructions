import type { ReactNode } from 'react';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
    children?: ReactNode;
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'left',
    light = false,
}: SectionHeadingProps) {
    const alignClasses = align === 'center' ? 'text-center mx-auto' : '';
    const eyebrowColor = light ? 'text-amber-400' : 'text-amber-600';
    const titleColor = light ? 'text-white' : 'text-charcoal';
    const subtitleColor = light ? 'text-concrete-300' : 'text-concrete';

    return (
        <div className={`max-w-3xl mb-12 md:mb-16 ${alignClasses}`}>
            {eyebrow && (
                <span className={`block text-sm font-semibold uppercase tracking-wider mb-3 ${eyebrowColor}`}>
                    {eyebrow}
                </span>
            )}
            <h2 className={`text-h2 md:text-h1 ${titleColor}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-lg md:text-xl ${subtitleColor}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
