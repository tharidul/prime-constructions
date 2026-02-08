import type { TeamMember } from '../../data/team.data';

interface TeamCardProps {
    member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
    return (
        <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-concrete-100 mb-4">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-concrete-200 transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    style={{
                        backgroundImage: `url(${member.image})`,
                    }}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal">
                {member.name}
            </h3>
            <p className="text-sm text-amber-600 font-medium">
                {member.role}
            </p>
            {member.bio && (
                <p className="text-sm text-concrete mt-2">
                    {member.bio}
                </p>
            )}
        </div>
    );
}
