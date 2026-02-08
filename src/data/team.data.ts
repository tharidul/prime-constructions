export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 'james-carter',
        name: 'James Carter',
        role: 'Chief Executive Officer',
        image: '/images/team/james-carter.jpg',
        bio: '30+ years in construction leadership, driving company vision and strategic growth.',
    },
    {
        id: 'sarah-mitchell',
        name: 'Sarah Mitchell',
        role: 'Chief Operations Officer',
        image: '/images/team/sarah-mitchell.jpg',
        bio: 'Operations expert with focus on project delivery excellence and safety standards.',
    },
    {
        id: 'david-chen',
        name: 'David Chen',
        role: 'VP of Engineering',
        image: '/images/team/david-chen.jpg',
        bio: 'Licensed PE with expertise in structural engineering and complex builds.',
    },
    {
        id: 'maria-santos',
        name: 'Maria Santos',
        role: 'VP of Business Development',
        image: '/images/team/maria-santos.jpg',
        bio: 'Building lasting client relationships and expanding market presence.',
    },
    {
        id: 'robert-kim',
        name: 'Robert Kim',
        role: 'Director of Project Management',
        image: '/images/team/robert-kim.jpg',
        bio: 'PMP-certified leader managing multi-million dollar project portfolios.',
    },
    {
        id: 'jennifer-adams',
        name: 'Jennifer Adams',
        role: 'Director of Safety & Compliance',
        image: '/images/team/jennifer-adams.jpg',
        bio: 'Ensuring zero-incident workplaces and regulatory compliance.',
    },
];
