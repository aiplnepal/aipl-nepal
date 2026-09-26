import { Wheat, MessageCircle, MapPin } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const stats = [
  {
    icon: Wheat,
    text: "Made for Nepal's soil and seasons",
  },
  {
    icon: MessageCircle,
    text: "Backed by farmer feedback",
  },
  {
    icon: MapPin,
    text: "Nationwide dealer network",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-forest/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.text} delay={i * 0.1}>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-900 font-medium text-base">{stat.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
