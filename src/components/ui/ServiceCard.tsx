import type { Service } from '../../data/services.data';
import { serviceIcons } from './Icons';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const IconComponent = serviceIcons[service.icon];

    return (
        <div className="group p-6 md:p-8 bg-white border border-concrete-200 hover:border-amber-600 transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-concrete-50 text-charcoal group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 mb-6">
                <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="text-h4 mb-3 text-charcoal">
                {service.title}
            </h3>
            <p className="text-concrete leading-relaxed mb-4">
                {service.description}
            </p>
            {service.features && (
                <ul className="space-y-1">
                    {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-concrete-600 flex items-center gap-2">
                            <span className="w-1 h-1 bg-amber-600 rounded-full" />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
