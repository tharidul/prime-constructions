import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ProjectCard } from '../components/ui/ProjectCard';
import { MetricCard } from '../components/ui/MetricCard';
import { ArrowRightIcon } from '../components/ui/Icons';
import { services } from '../data/services.data';
import { projects } from '../data/projects.data';
import { COMPANY, METRICS } from '../utils/constants';
import aboutPreview from '../assets/images/about-preview.png';
import heroBg from '../assets/images/hero-bg.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export function Home() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
    const featuredServices = services.slice(0, 4);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />

                <Container className="relative z-10 pt-24">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        <motion.span
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-wider mb-6"
                        >
                            {COMPANY.tagline}
                        </motion.span>

                        <motion.h1
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="text-display text-white mb-6"
                        >
                            We Build What
                            <br />
                            <span className="text-amber-400">Matters</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="text-xl text-concrete-300 mb-10 max-w-xl"
                        >
                            From commercial complexes to critical infrastructure, we deliver construction excellence with precision, safety, and integrity.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button as="link" href="/projects" size="lg">
                                View Our Work
                            </Button>
                            <Button as="link" href="/contact" variant="secondary" size="lg" className="text-white border-white hover:bg-white hover:text-charcoal">
                                Get a Quote
                            </Button>
                        </motion.div>
                    </motion.div>
                </Container>

                <div className="absolute bottom-0 left-0 right-0">
                    <Container>
                        <div className="border-t border-white/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <MetricCard value={METRICS.yearsExperience} suffix="+" label="Years Experience" light />
                            <MetricCard value={METRICS.projectsCompleted} suffix="+" label="Projects Completed" light />
                            <MetricCard value={METRICS.clientsSatisfied} suffix="+" label="Clients Served" light />
                            <MetricCard value={METRICS.safetyRecord} label="Safe Work Hours" light />
                        </div>
                    </Container>
                </div>
            </section>

            {/* About Intro */}
            <Section background="light">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <SectionHeading
                                eyebrow="Who We Are"
                                title="Building the Pacific Northwest for Over Three Decades"
                                subtitle="Prime Constructions has been at the forefront of construction excellence, delivering projects that stand the test of time."
                            />
                            <p className="text-concrete leading-relaxed mb-8">
                                Our commitment to quality craftsmanship, safety, and client satisfaction has made us a trusted partner for commercial, residential, and industrial construction across the region. We don't just build structures—we build lasting relationships.
                            </p>
                            <Button as="link" href="/about" variant="secondary">
                                Learn More About Us
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] bg-concrete-100" style={{ backgroundImage: `url(${aboutPreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 md:p-8">
                                <div className="text-3xl md:text-4xl font-bold mb-1">{METRICS.yearsExperience}+</div>
                                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Services Preview */}
            <Section>
                <Container>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
                        <SectionHeading
                            eyebrow="What We Do"
                            title="Comprehensive Construction Services"
                            subtitle="Full-service construction solutions tailored to your project needs."
                        />
                        <Link
                            to="/services"
                            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors group mt-6 md:mt-0"
                        >
                            View All Services
                            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Featured Projects */}
            <Section background="dark">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
                        <SectionHeading
                            eyebrow="Our Work"
                            title="Featured Projects"
                            subtitle="Recent projects showcasing our commitment to quality and excellence."
                            light
                        />
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors group mt-6 md:mt-0"
                        >
                            View All Projects
                            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section background="accent">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-h2 md:text-h1 text-charcoal mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-concrete mb-10">
                            Let's discuss how Prime Constructions can bring your vision to life. Our team is ready to deliver excellence on your next project.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button as="link" href="/contact" size="lg">
                                Contact Us Today
                            </Button>
                            <Button as="link" href="/projects" variant="secondary" size="lg">
                                Explore Our Work
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
