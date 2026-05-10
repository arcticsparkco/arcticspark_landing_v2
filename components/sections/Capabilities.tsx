import { Globe, BarChart2, Palette, Server } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web & Mobile",
    description:
      "Full-stack web applications and mobile experiences built for performance and scale.",
    accent: "#00D4FF",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description:
      "Pipelines, dashboards, and visualisations that turn raw data into clear decisions.",
    accent: "#FFD700",
  },
  {
    icon: Palette,
    title: "UX & Design",
    description:
      "Interfaces grounded in research — intuitive enough that they never need a manual.",
    accent: "#8B5CF6",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Cloud-native architecture on GCP and AWS, built to grow with your product.",
    accent: "#00D4FF",
  },
];

export default function Capabilities() {
  return (
    <section className="pb-24 sm:pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-arctic-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-arctic-white mb-4">
            What we do
          </h2>
          <p className="text-arctic-muted text-lg max-w-xl mx-auto">
            End-to-end capability across the full product lifecycle.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{
                borderColor: `${accent}20`,
                backgroundColor: "rgba(17,24,39,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Icon container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${accent}15`,
                  boxShadow: `0 0 0 1px ${accent}25`,
                }}
              >
                <Icon
                  size={22}
                  style={{ color: accent }}
                  aria-hidden
                />
              </div>

              <div>
                <h3 className="font-bold text-arctic-white mb-2">{title}</h3>
                <p className="text-arctic-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="mt-auto h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ backgroundColor: accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
