import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  tagline: string;
  category: string;
  badgeVariant: "default" | "gold" | "violet";
  description: string;
  tags: string[];
  accentColor: string;
  glowClass: string;
  gradientFrom: string;
  gradientTo: string;
}

const projects: Project[] = [
  {
    name: "klazzy",
    tagline: "Beauty, curated by community.",
    category: "Community Platform",
    badgeVariant: "default",
    description:
      "A community where beauty enthusiasts discover, share, and review the latest products. Our recommendation engine learns your aesthetic and surfaces the products that matter to you — before you know you need them.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    accentColor: "#00D4FF",
    glowClass: "glow-cyan",
    gradientFrom: "rgba(0,212,255,0.15)",
    gradientTo: "rgba(0,212,255,0)",
  },
  {
    name: "artviz",
    tagline: "Your art market data analyst.",
    category: "Analytics Platform",
    badgeVariant: "gold",
    description:
      "An analytics platform for collectors and enthusiasts — surfacing real-time market signals, predictive auction valuations, and emerging artist trends in one intelligent dashboard.",
    tags: ["Next.js", "Python", "BigQuery", "D3.js"],
    accentColor: "#FFD700",
    glowClass: "glow-gold",
    gradientFrom: "rgba(255,215,0,0.15)",
    gradientTo: "rgba(255,215,0,0)",
  },
  {
    name: "snowaddict",
    tagline: "AI-matched gear. Maximum shred.",
    category: "Gear & Community",
    badgeVariant: "violet",
    description:
      "Your mountain companion. Intelligent gear recommendations matched to your riding style, real-time conditions analysis, and a community of powder hounds who live for the mountain.",
    tags: ["React Native", "GraphQL", "Elasticsearch"],
    accentColor: "#8B5CF6",
    glowClass: "glow-violet",
    gradientFrom: "rgba(139,92,246,0.15)",
    gradientTo: "rgba(139,92,246,0)",
  },
  {
    name: "Frontier",
    tagline: "AI-matched capital for bold ventures.",
    category: "Financial",
    badgeVariant: "gold",
    description:
      "Intelligent investor discovery powered. Frontier analyzes thousands of funding signals to match founders with the right investors at the right stage — turning cold outreach into warm introductions.",
    tags: ["React Native", "GraphQL", "Elasticsearch"],
    accentColor: "#FFD700",
    glowClass: "glow-gold",
    gradientFrom: "rgba(255,215,0,0.15)",
    gradientTo: "rgba(255,215,0,0)",
  },  
  {
    name: "Moose Dispatch",
    tagline: "Your copilot for caregiving.",
    category: "Home",
    badgeVariant: "violet",
    description:
      "An orchestration platform that helps caregivers manage complex schedules, coordinate care teams, and stay ahead of daily demands — so they can focus on what matters most: the people they care for.",
    tags: ["React Native", "GraphQL", "Elasticsearch"],
    accentColor: "#8B5CF6",
    glowClass: "glow-violet",
    gradientFrom: "rgba(139,92,246,0.15)",
    gradientTo: "rgba(139,92,246,0)",
  },  
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-2xl cursor-default overflow-hidden"
      )}
      style={{
        borderColor: `${project.accentColor}25`,
        backgroundColor: "rgba(17, 24, 39, 0.6)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.accentColor}50, 0 0 40px ${project.accentColor}20`,
        }}
      />

      {/* Gradient colour block / placeholder image */}
      <div
        className="h-44 w-full rounded-t-2xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, rgba(10,14,26,0.8) 100%)`,
        }}
      >
        {/* Subtle grid overlay on card header */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${project.accentColor} 1px, transparent 1px),
              linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        <span
          className="text-4xl font-black tracking-tighter relative z-10 select-none"
          style={{ color: project.accentColor, textShadow: `0 0 30px ${project.accentColor}80` }}
        >
          {project.name}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-arctic-white group-hover:text-[var(--accent)] transition-colors duration-200"
              style={{ "--accent": project.accentColor } as React.CSSProperties}>
              {project.name}
            </h3>
            <p className="text-xs text-arctic-muted mt-0.5">{project.tagline}</p>
          </div>
          <Badge variant={project.badgeVariant} className="shrink-0 mt-0.5">
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-arctic-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors duration-200"
              style={{
                color: `${project.accentColor}cc`,
                backgroundColor: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Section background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-arctic-bg via-arctic-surface/30 to-arctic-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-arctic-cyan text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-arctic-white mb-4">
            Our Work
          </h2>
          <p className="text-arctic-muted text-lg max-w-xl mx-auto">
            AI-powered products we've designed, built, and shipped into the wild.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
