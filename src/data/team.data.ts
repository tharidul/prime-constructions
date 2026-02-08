import jamesCarter from '../assets/images/team/james-carter.png';
import sarahMitchell from '../assets/images/team/sarah-mitchell.png';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 'james-carter',
        name: 'James Carter',
        role: 'Chief Executive Officer',
        bio: '30+ years in construction leadership, driving company vision and strategic growth across the Pacific Northwest.',
        image: jamesCarter,
        linkedin: 'https://linkedin.com',
        email: 'james.carter@primeconstructions.com',
    },
    {
        id: 'sarah-mitchell',
        name: 'Sarah Mitchell',
        role: 'Chief Operations Officer',
        bio: 'Operations expert with focus on project delivery optimization and maintaining our safety-first culture.',
        image: sarahMitchell,
        linkedin: 'https://linkedin.com',
        email: 'sarah.mitchell@primeconstructions.com',
    },
    {
        id: 'david-chen',
        name: 'David Chen',
        role: 'VP of Engineering',
        bio: 'Licensed PE with expertise in structural engineering and complex infrastructure projects.',
        image: jamesCarter, // Reuse James as placeholder/fallback
        linkedin: 'https://linkedin.com',
        email: 'david.chen@primeconstructions.com',
    },
    {
        id: 'emily-rodriguez',
        name: 'Emily Rodriguez',
        role: 'Senior Project Manager',
        bio: 'Award-winning project manager known for delivering large-scale commercial developments on time and budget.',
        image: sarahMitchell, // Reuse Sarah as placeholder/fallback
        linkedin: 'https://linkedin.com',
        email: 'emily.rodriguez@primeconstructions.com',
    },
    {
        id: 'michael-chang',
        name: 'Michael Chang',
        role: 'Safety Director',
        bio: 'Certified Safety Professional dedicated to maintaining our industry-leading safety record.',
        image: jamesCarter, // Reuse James as placeholder/fallback
        linkedin: 'https://linkedin.com',
        email: 'michael.chang@primeconstructions.com',
    },
    {
        id: 'robert-foster',
        name: 'Robert Foster',
        role: 'Chief Estimator',
        bio: '25 years of estimation experience ensuring accurate budgeting and value engineering for clients.',
        image: jamesCarter, // Reuse James as placeholder/fallback
        linkedin: 'https://linkedin.com',
        email: 'robert.foster@primeconstructions.com',
    },
];
