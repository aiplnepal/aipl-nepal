import { AnimateIn } from "./AnimateIn";
import Image from "next/image";

export function FarmerEmpowerment({ dict }: { dict: any }) {
  // TODO: [CLIENT VERIFICATION REQUIRED] 
  // The following statistics are pending verification from the client.
  // They are currently hidden/commented out from the UI until confirmed.
  const isVerified = false;
  
  const pendingStats = [
    { value: "7", label: dict.home.farmerEmpowerment.stats.provinces },
    { value: "77", label: dict.home.farmerEmpowerment.stats.districts },
    { value: "6,743", label: dict.home.farmerEmpowerment.stats.wards },
  ];

  return (
    <section className="bg-forest text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-deeper/50 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {dict.home.farmerEmpowerment.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="w-12 h-1 bg-white mb-8"></div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {dict.home.farmerEmpowerment.p1}
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                {dict.home.farmerEmpowerment.p2}
              </p>
            </AnimateIn>

            {isVerified && (
              <AnimateIn delay={0.3} className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/20">
                {pendingStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl font-bold mb-2">{stat.value}</p>
                    <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </AnimateIn>
            )}
          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <AnimateIn className="w-full h-full" delay={0.4}>
              <Image
                src="/nepal-landscape.jpg" // Placeholder for an authentic Nepalese agricultural landscape
                alt={dict.home.farmerEmpowerment.imageAlt}
                fill
                className="object-cover"
              />
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
