import { AnimateIn } from "@/components/sections/AnimateIn";

export function MissionVision({ dict }: { dict: any }) {
  return (
    <section className="bg-forest/5 py-20 lg:py-32 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <AnimateIn delay={0.1}>
            <div className="border-l-2 border-forest pl-6 h-full flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                {dict.about.missionVision.missionTitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                {dict.about.missionVision.missionText}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="border-l-2 border-forest pl-6 h-full flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                {dict.about.missionVision.visionTitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                {dict.about.missionVision.visionText}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="border-l-2 border-forest pl-6 h-full flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                {dict.about.missionVision.purposeTitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                {dict.about.missionVision.purposeText}
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
