import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,60,80,0.9) 0%, rgba(10,14,26,1) 40%, rgba(30,20,60,0.9) 100%)",
          }}
        />
        {/* Orbs */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Eyebrow */}
        <p className="text-arctic-cyan text-sm font-semibold tracking-widest uppercase mb-4">
          Get in Touch
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-arctic-white mb-6 leading-tight">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-arctic-cyan to-arctic-gold bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        <p className="text-arctic-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Have a project in mind or just want to say hello? We&apos;d love to hear
          from you.
        </p>

        <a href="mailto:info@arcticspark.co">
          <Button variant="white" size="lg" className="group gap-2 text-base px-8">
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            info@arcticspark.co
          </Button>
        </a>
      </div>
    </section>
  );
}
