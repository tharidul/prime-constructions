import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { MetricCard } from '../components/ui/MetricCard';
import { TeamCard } from '../components/ui/TeamCard';
import { teamMembers } from '../data/team.data';
import { COMPANY, METRICS } from '../utils/constants';
import aboutStory from '../assets/images/about-story.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-charcoal">
                <Container>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
                            About Us
                        </span>
                        <h1 className="text-h1 md:text-display text-white mb-6">
                            Building Trust Through Excellence
                        </h1>
                        <p className="text-xl text-concrete-300">
                            For over {METRICS.yearsExperience} years, {COMPANY.name} has been the foundation of quality construction in the Pacific Northwest.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Story Section */}
            <Section background="light">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <SectionHeading
                                eyebrow="Our Story"
                                title="From Humble Beginnings to Industry Leaders"
                            />
                            <div className="space-y-6 text-concrete leading-relaxed">
                                <p>
                                    Founded in 1987 by a small team of dedicated craftsmen, {COMPANY.name} began with a simple vision: to build structures that communities could rely on for generations. What started as a local residential contractor has grown into one of the Pacific Northwest's most trusted construction firms.
                                </p>
                                <p>
                                    Over three decades, we've expanded our expertise across commercial, industrial, and infrastructure projects while never losing sight of our founding principles—quality craftsmanship, unwavering safety standards, and genuine client partnerships.
                                </p>
                                <p>
                                    Today, our team of {METRICS.employeesCount}+ professionals continues to raise the bar for construction excellence, combining time-tested methods with innovative techniques to deliver projects that exceed expectations.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="aspect-[4/3] bg-concrete-100" style={{ backgroundImage: `url(${aboutStory})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values Section */}
            <Section>
                <Container>
                    <SectionHeading
                        eyebrow="Our Values"
                        title="The Principles That Guide Us"
                        align="center"
                    />

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <h3 className="text-h4 text-charcoal mb-3">Safety First</h3>
                            <p className="text-concrete">
                                Every decision we make prioritizes the safety of our workers, clients, and communities. Our {METRICS.safetyRecord} safe work hours speak to this commitment.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                            <h3 className="text-h4 text-charcoal mb-3">Quality Craftsmanship</h3>
                            <p className="text-concrete">
                                We take pride in our work, delivering construction that stands the test of time. Every detail matters, every corner counts.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <h3 className="text-h4 text-charcoal mb-3">Client Partnership</h3>
                            <p className="text-concrete">
                                We build relationships, not just buildings. Our clients trust us because we listen, communicate, and deliver on our promises.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Metrics Section */}
            <Section background="dark">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <MetricCard value={METRICS.yearsExperience} suffix="+" label="Years Experience" light />
                        <MetricCard value={METRICS.projectsCompleted} suffix="+" label="Projects Completed" light />
                        <MetricCard value={METRICS.clientsSatisfied} suffix="+" label="Clients Served" light />
                        <MetricCard value={METRICS.employeesCount} suffix="+" label="Team Members" light />
                    </div>
                </Container>
            </Section>

            {/* Team Section */}
            <Section id="team">
                <Container>
                    <SectionHeading
                        eyebrow="Our Team"
                        title="Leadership That Delivers"
                        subtitle="Meet the experienced professionals who guide our projects to success."
                        align="center"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
