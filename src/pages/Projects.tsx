import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects, projectTypes } from '../data/projects.data';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.type === activeFilter);

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
                            Our Work
                        </span>
                        <h1 className="text-h1 md:text-display text-white mb-6">
                            Projects Built to Last
                        </h1>
                        <p className="text-xl text-concrete-300">
                            Explore our portfolio of commercial, residential, industrial, and infrastructure projects across the Pacific Northwest.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Projects Section */}
            <Section background="light">
                <Container>
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12">
                        {projectTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveFilter(type.id)}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeFilter === type.id
                                        ? 'bg-charcoal text-white'
                                        : 'bg-white text-concrete hover:text-charcoal border border-concrete-200'
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 text-concrete">
                            No projects found in this category.
                        </div>
                    )}
                </Container>
            </Section>
        </>
    );
}
