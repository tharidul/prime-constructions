export interface Service {
    id: string;
    title: string;
    description: string;
    icon: 'building' | 'blueprint' | 'tools' | 'hardhat' | 'crane' | 'renovation';
    features?: string[];
}

export const services: Service[] = [
    {
        id: 'commercial',
        title: 'Commercial Construction',
        description: 'Full-scale commercial building solutions from ground-up construction to complex renovations. We deliver projects on time and within budget.',
        icon: 'building',
        features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Medical Facilities'],
    },
    {
        id: 'residential',
        title: 'Residential Development',
        description: 'Custom homes and multi-family residential projects built with precision and attention to detail. Quality craftsmanship in every home.',
        icon: 'blueprint',
        features: ['Custom Homes', 'Multi-Family Units', 'Townhouses', 'Luxury Estates'],
    },
    {
        id: 'industrial',
        title: 'Industrial Facilities',
        description: 'Heavy industrial construction including manufacturing plants, processing facilities, and specialized infrastructure projects.',
        icon: 'crane',
        features: ['Manufacturing Plants', 'Distribution Centers', 'Processing Facilities', 'Heavy Equipment'],
    },
    {
        id: 'renovation',
        title: 'Renovation & Restoration',
        description: 'Comprehensive renovation services that modernize existing structures while preserving architectural integrity.',
        icon: 'renovation',
        features: ['Building Upgrades', 'Historic Restoration', 'Seismic Retrofitting', 'Tenant Improvements'],
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure Projects',
        description: 'Civil infrastructure including roads, bridges, utilities, and public works projects serving communities.',
        icon: 'hardhat',
        features: ['Roads & Highways', 'Bridges', 'Utilities', 'Public Works'],
    },
    {
        id: 'design-build',
        title: 'Design-Build Services',
        description: 'Integrated design and construction services that streamline project delivery and reduce complexity.',
        icon: 'tools',
        features: ['Single Point Responsibility', 'Faster Delivery', 'Cost Efficiency', 'Quality Control'],
    },
];
