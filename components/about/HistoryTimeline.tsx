import { AnimateIn } from "@/components/sections/AnimateIn";
import { Building2, FileText, CheckCircle } from "lucide-react";

export function HistoryTimeline({ dict }: { dict: any }) {
  // TODO: [CLIENT VERIFICATION REQUIRED]
  // {dict.about.historyTimeline.items[1].title} and timeline details need final client confirmation
  
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
              {dict.about.historyTimeline.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              {dict.about.historyTimeline.title}
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          
          {/* Timeline Item 1 */}
          <AnimateIn delay={0.1}>
            <div className="relative flex items-center justify-between group is-active">
              {/* Left space for desktop */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]"></div>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-forest text-white shadow shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                <Building2 className="w-4 h-4" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{dict.about.historyTimeline.items[0].title}</h3>
                  <span className="text-forest font-semibold text-sm">{dict.about.historyTimeline.items[0].date}</span>
                </div>
                <p className="text-gray-600">
                  {dict.about.historyTimeline.items[0].description}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Timeline Item 2 */}
          <AnimateIn delay={0.2}>
            <div className="relative flex items-center justify-between group is-active">
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm md:text-right">
                <div className="flex items-center justify-between mb-2 md:flex-row-reverse">
                  <h3 className="font-bold text-gray-900 text-lg">{dict.about.historyTimeline.items[1].title}</h3>
                  <span className="text-gray-500 font-semibold text-sm">{dict.about.historyTimeline.items[1].date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Company {dict.about.historyTimeline.items[1].title} No. 241861/077/078
                </p>
                <p className="text-gray-600 text-sm">
                  Industry {dict.about.historyTimeline.items[1].title} No. 2503/36/063/063
                </p>
              </div>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-500 shadow shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 -order-1 md:order-none">
                <FileText className="w-4 h-4" />
              </div>
              
              {/* Right space for desktop */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]"></div>
            </div>
          </AnimateIn>

          {/* Timeline Item 3 */}
          <AnimateIn delay={0.3}>
            <div className="relative flex items-center justify-between group is-active">
              {/* Left space for desktop */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]"></div>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-500 shadow shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                <CheckCircle className="w-4 h-4" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{dict.about.historyTimeline.items[2].title}</h3>
                  <span className="text-gray-500 font-semibold text-sm">{dict.about.historyTimeline.items[2].date}</span>
                </div>
                <p className="text-gray-600">
                  {dict.about.historyTimeline.items[2].description}
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
