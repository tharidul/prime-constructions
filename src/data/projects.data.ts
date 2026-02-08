import meridianTower from '../assets/images/projects/meridian-tower.png';
import harborHeights from '../assets/images/projects/harbor-heights.png';
import northwestLogistics from '../assets/images/projects/northwest-logistics.png';
import pacificGateway from '../assets/images/projects/pacific-gateway.png';
import evergreenMedical from '../assets/images/projects/evergreen-medical.png';

export interface Project {
    id: string;
    name: string;
    location: string;
    type: 'commercial' | 'residential' | 'industrial' | 'infrastructure' | 'renovation';
    year: number;
    image: string;
    description?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'meridian-tower',
        name: 'Meridian Tower',
        location: 'Downtown Seattle, WA',
        type: 'commercial',
        year: 2024,
        image: meridianTower,
        description: '32-story mixed-use development featuring Class A office space and ground-floor retail.',
        featured: true,
    },
    {
        id: 'harbor-heights',
        name: 'Harbor Heights Residences',
        location: 'Portland, OR',
        type: 'residential',
        year: 2024,
        image: harborHeights,
        description: 'Luxury waterfront condominium complex with 180 units and premium amenities.',
        featured: true,
    },
    {
        id: 'northwest-logistics',
        name: 'Northwest Logistics Center',
        location: 'Tacoma, WA',
        type: 'industrial',
        year: 2023,
        image: northwestLogistics,
        description: '450,000 SF distribution facility with automated systems and sustainable design.',
        featured: true,
    },
    {
        id: 'pacific-gateway',
        name: 'Pacific Gateway Bridge',
        location: 'Vancouver, WA',
        type: 'infrastructure',
        year: 2023,
        image: pacificGateway,
        description: 'Major highway interchange project improving regional connectivity.',
    },
    {
        id: 'evergreen-medical',
        name: 'Evergreen Medical Center',
        location: 'Bellevue, WA',
        type: 'commercial',
        year: 2023,
        image: evergreenMedical,
        description: 'State-of-the-art medical facility with advanced surgical suites.',
    },
    {
        id: 'heritage-plaza',
        name: 'Heritage Plaza Renovation',
        location: 'Seattle, WA',
        type: 'renovation',
        year: 2022,
        image: '/images/projects/heritage-plaza.jpg', // Placeholder
        description: 'Historic building restoration preserving 1920s architecture with modern systems.',
    },
    {
        id: 'cascade-manufacturing',
        name: 'Cascade Manufacturing Plant',
        location: 'Spokane, WA',
        type: 'industrial',
        year: 2022,
        image: '/images/projects/cascade-manufacturing.jpg', // Placeholder
        description: '280,000 SF advanced manufacturing facility with clean room environments.',
    },
    {
        id: 'summit-estates',
        name: 'Summit Estates',
        location: 'Bend, OR',
        type: 'residential',
        year: 2022,
        image: '/images/projects/summit-estates.jpg', // Placeholder
        description: 'Master-planned community with 120 single-family homes.',
    },
];

export const projectTypes = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'renovation', label: 'Renovation' },
] as const;
