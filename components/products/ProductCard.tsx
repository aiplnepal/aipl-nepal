import Link from "next/link";
import { FlaskConical, Shield, Sprout, Leaf, Recycle, ArrowRight, Droplets } from "lucide-react";
import type { Product } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  flask: FlaskConical,
  shield: Shield,
  sprout: Sprout,
  leaf: Leaf,
  recycle: Recycle,
  droplets: Droplets,
};

export function ProductCard({ product, dict, locale = "en" }: { product: any, dict?: any, locale?: string }) {
  const Icon = iconMap[product.icon] ?? FlaskConical;

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-110" />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center shadow-md">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-forest bg-forest/10 px-3 py-1 rounded-full">
          {dict?.common?.productCard?.badge || "Agricultural Input"}
        </span>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-forest transition-colors leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {product.description.substring(0, 140)}...
        </p>

        {product.components && product.components.length > 0 && (
          <div className="mb-6 pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{dict?.common?.productCard?.activeComponents || "Active Components"}</p>
            <div className="flex flex-wrap gap-2">
              {product.components.slice(0, 3).map((comp: any) => (
                <span key={comp} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
                  {comp}
                </span>
              ))}
              {product.components.length > 3 && (
                <span className="text-xs text-gray-400 py-1">+{product.components.length - 3} {dict?.common?.productCard?.more || "more"}</span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-forest transition-colors">
        <span>{dict?.common?.productCard?.viewProfile || "View Scientific Profile"}</span>
        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
