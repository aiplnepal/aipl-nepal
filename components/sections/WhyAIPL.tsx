import { Award, ShieldCheck, Truck } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const reasons = [
  {
    icon: Award,
    title: "First Impression",
    description:
      "Dealers and institutional buyers judge product quality by how a brand presents itself — before they ever open a bag.",
  },
  {
    icon: ShieldCheck,
    title: "Buyer Trust",
    description:
      "Agri inputs affect a whole season's harvest. We stand behind every product we sell.",
  },
  {
    icon: Truck,
    title: "Wider Reach",
    description:
      "From our dealer network to your doorstep — wherever you farm in Nepal.",
  },
];

export function WhyAIPL({ dict }: { dict: any }) {
  return (
    <section className="bg-forest/5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Why AIPL
            </h2>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 0.1}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
