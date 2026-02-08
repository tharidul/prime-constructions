import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/ui/Icons';
import { COMPANY } from '../utils/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function Contact() {
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
                            Contact Us
                        </span>
                        <h1 className="text-h1 md:text-display text-white mb-6">
                            Let's Build Something Together
                        </h1>
                        <p className="text-xl text-concrete-300">
                            Ready to discuss your project? Our team is here to answer your questions and provide expert guidance.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Section */}
            <Section background="light">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-2">
                            <SectionHeading
                                title="Send Us a Message"
                                subtitle="Fill out the form below and we'll get back to you within 24 hours."
                            />
                            <ContactForm />
                        </div>

                        <div>
                            <SectionHeading
                                title="Get in Touch"
                                subtitle="Prefer to reach out directly? Here's how to contact us."
                            />

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0">
                                        <PhoneIcon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                                        <a
                                            href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
                                            className="text-concrete hover:text-amber-600 transition-colors"
                                        >
                                            {COMPANY.phone}
                                        </a>
                                        <p className="text-sm text-concrete-400 mt-1">
                                            Mon-Fri, 7:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0">
                                        <MailIcon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                                        <a
                                            href={`mailto:${COMPANY.email}`}
                                            className="text-concrete hover:text-amber-600 transition-colors"
                                        >
                                            {COMPANY.email}
                                        </a>
                                        <p className="text-sm text-concrete-400 mt-1">
                                            We respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal mb-1">Office</h4>
                                        <p className="text-concrete">
                                            {COMPANY.address.street}<br />
                                            {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 aspect-video bg-concrete-100 flex items-center justify-center border border-concrete-200">
                                <div className="text-center text-concrete">
                                    <MapPinIcon className="w-8 h-8 mx-auto mb-2 text-concrete-300" />
                                    <p className="text-sm">Map placeholder</p>
                                    <p className="text-xs text-concrete-400">API key required</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
