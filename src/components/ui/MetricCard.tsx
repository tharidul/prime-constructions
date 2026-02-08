interface MetricCardProps {
    value: string | number;
    label: string;
    suffix?: string;
}

export function MetricCard({ value, label, suffix = '' }: MetricCardProps) {
    return (
        <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-2">
                {value}
                {suffix && <span className="text-amber-600">{suffix}</span>}
            </div>
            <div className="text-sm md:text-base text-concrete uppercase tracking-wider font-medium">
                {label}
            </div>
        </div>
    );
}
