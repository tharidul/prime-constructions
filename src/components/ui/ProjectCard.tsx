import type { Project } from '../../data/projects.data';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden bg-concrete-100 aspect-[4/3]">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo group-hover:scale-105"
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundColor: '#6b7280'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-400 mb-2">
                    {project.type} • {project.year}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                    {project.name}
                </h3>
                <p className="text-sm text-concrete-300">
                    {project.location}
                </p>
                {project.description && (
                    <p className="text-sm text-concrete-400 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                    </p>
                )}
            </div>
        </div>
    );
}
