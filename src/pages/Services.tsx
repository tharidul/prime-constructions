import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { services } from '../data/services.data';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function Services() {
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
                            Our Services
                        </span>
                        <h1 className="text-h1 md:text-display text-white mb-6">
                            Comprehensive Construction Solutions
                        </h1>
                        <p className="text-xl text-concrete-300">
                            From concept to completion, we deliver full-service construction tailored to your project requirements.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Services Grid */}
            <Section background="light">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Process Section */}
            <Section>
                <Container>
                    <SectionHeading
                        eyebrow="Our Process"
                        title="How We Work"
                        subtitle="A proven approach that delivers projects on time and on budget."
                        align="center"
                    />

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', description: 'We listen to your vision and requirements to understand the full scope of your project.' },
                            { step: '02', title: 'Planning', description: 'Our team develops detailed plans, timelines, and budgets tailored to your goals.' },
                            { step: '03', title: 'Construction', description: 'Expert crews execute the work with precision, maintaining open communication throughout.' },
                            { step: '04', title: 'Delivery', description: 'We ensure every detail meets our quality standards before handing over your project.' },
                        ].map((item) => (
                            <div key={item.step} className="relative">
                                <div className="text-5xl font-bold text-amber-100 mb-4">{item.step}</div>
                                <h3 className="text-h4 text-charcoal mb-2">{item.title}</h3>
                                <p className="text-concrete text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section background="dark">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-h2 text-white mb-6">
                            Ready to Discuss Your Project?
                        </h2>
                        <p className="text-concrete-300 mb-8">
                            Our team is ready to help you plan and execute your next construction project.
                        </p>
                        <Button as="link" href="/contact" size="lg">
                            Get a Free Consultation
                        </Button>
                    </div>
                </Container>
            </Section>
        </>
    );
}
