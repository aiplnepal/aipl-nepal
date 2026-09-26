import Link from "next/link";
import { FlaskConical, Shield, Sprout, Leaf, Recycle, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskConical,
  shield: Shield,
  sprout: Sprout,
  leaf: Leaf,
  recycle: Recycle,
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon] ?? FlaskConical;
  const accentBg = "bg-forest";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center h-full cursor-pointer"
    >
      <div
        className={`w-16 h-16 rounded-full ${accentBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-forest transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm mb-6 flex-1">{product.tagline}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest group-hover:gap-2.5 transition-all">
        View Details <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
