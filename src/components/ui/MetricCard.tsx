interface MetricCardProps {
    value: string | number;
    label: string;
    suffix?: string;
    light?: boolean;
}

export function MetricCard({ value, label, suffix = '', light = false }: MetricCardProps) {
    return (
        <div className="text-center">
            <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${light ? 'text-white' : 'text-charcoal'}`}>
                {value}
                {suffix && <span className="text-amber-600">{suffix}</span>}
            </div>
            <div className={`text-sm md:text-base uppercase tracking-wider font-medium ${light ? 'text-concrete-300' : 'text-concrete'}`}>
                {label}
            </div>
        </div>
    );
}
