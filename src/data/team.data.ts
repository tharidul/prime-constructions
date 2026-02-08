export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    social: {
        linkedin?: string;
        twitter?: string;
        email: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: 'james-carter',
        name: 'James Carter',
        role: 'CEO & Founder',
        bio: 'With over 40 years in construction, James built Prime from a small contractor to a regional leader.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        social: {
            linkedin: '#',
            email: 'james@primeconstructions.com',
        },
    },
    {
        id: 'sarah-jenkins',
        name: 'Sarah Jenkins',
        role: 'VP of Operations',
        bio: 'Sarah oversees all daily operations, ensuring projects are delivered on time and within budget.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
        social: {
            linkedin: '#',
            email: 'sarah@primeconstructions.com',
        },
    },
    {
        id: 'david-ross',
        name: 'David Ross',
        role: 'Senior Project Manager',
        bio: 'David specializes in large-scale commercial developments and has managed over $500M in projects.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
        social: {
            linkedin: '#',
            email: 'david@primeconstructions.com',
        },
    },
    {
        id: 'emily-chen',
        name: 'Emily Chen',
        role: 'Lead Architect',
        bio: 'Emily brings creative vision and technical precision to every design, focusing on sustainable architecture.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
        social: {
            linkedin: '#',
            email: 'emily@primeconstructions.com',
        },
    },
    {
        id: 'michael-wright',
        name: 'Michael Wright',
        role: 'Site Superintendent',
        bio: 'Michael ensures safety and quality on the ground, bringing practical expertise to every job site.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
        social: {
            email: 'michael@primeconstructions.com',
        },
    },
    {
        id: 'jessica-williams',
        name: 'Jessica Williams',
        role: 'Interior Design Lead',
        bio: 'Jessica creates functional and inspiring interior spaces that enhance the user experience.',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
        social: {
            linkedin: '#',
            email: 'jessica@primeconstructions.com',
        },
    },
];
