export const COMPANY = {
    name: 'Prime Constructions',
    tagline: 'Building Excellence Since 1987',
    founded: 1987,
    phone: '(206) 555-0123',
    email: 'info@primeconstructions.com',
    address: {
        street: '1200 Industrial Way',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        full: '1200 Industrial Way, Seattle, WA 98101',
    },
    social: {
        linkedin: 'https://linkedin.com/company/primeconstructions',
        facebook: 'https://facebook.com/primeconstructions',
        instagram: 'https://instagram.com/primeconstructions',
    },
} as const;

export const METRICS = {
    yearsExperience: new Date().getFullYear() - COMPANY.founded,
    projectsCompleted: 500,
    clientsSatisfied: 200,
    employeesCount: 350,
    safetyRecord: '2.1M',
} as const;

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
] as const;

export const FOOTER_LINKS = {
    company: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about#team' },
        { label: 'Careers', path: '/careers' },
        { label: 'News', path: '/news' },
    ],
    services: [
        { label: 'Commercial', path: '/services#commercial' },
        { label: 'Residential', path: '/services#residential' },
        { label: 'Industrial', path: '/services#industrial' },
        { label: 'Renovation', path: '/services#renovation' },
    ],
} as const;
