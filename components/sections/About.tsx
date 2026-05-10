import { Heart, Target, Zap, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passionate about technology",
    description:
      "The world is our canvas. We take pride in clean, maintainable work.",
    accent: "#00D4FF",
  },
  {
    icon: Target,
    title: "User first",
    description:
      "We put the end user at the centre of every product decision.",
    accent: "#FFD700",
  },
  {
    icon: Zap,
    title: "Stay nimble",
    description: "Agile, collaborative, and always ready to adapt.",
    accent: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    description: "Architecture that grows with your ambitions.",
    accent: "#00D4FF",
  },
];

function ValueCard({
  icon: Icon,
  title,
  description,
  accent,
}: (typeof values)[0]) {
  return (
    <div
      className="rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 group"
      style={{
        borderColor: `${accent}20`,
        backgroundColor: "rgba(17,24,39,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: `${accent}15` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>
      <h4 className="font-semibold text-arctic-white text-sm mb-1.5">
        {title}
      </h4>
      <p className="text-arctic-muted text-xs leading-relaxed">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who we are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* Left: text */}
          <div>
            <p className="text-arctic-cyan text-sm font-semibold tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-arctic-white mb-6 leading-tight">
              Who we are
            </h2>
            <p className="text-arctic-muted leading-relaxed mb-5">
              Arctic Spark is a small team of techies who are passionate about
              creating world-class products. Over the past few years we have
              collaborated with individuals and businesses of all sizes to build
              quality digital products, analytic pipelines, and experiences.
            </p>
            <p className="text-arctic-muted leading-relaxed">
              Good software doesn&apos;t need a manual. That principle guides every
              decision we make — from architecture to the last pixel of the
              interface.
            </p>

            {/* Accent line */}
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-arctic-cyan to-transparent" />
          </div>

          {/* Right: value cards 2×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
