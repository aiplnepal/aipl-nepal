import { getResourceBySlug, getAllResources } from "@/lib/data/resources";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/sections/AnimateIn";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const resources = await getAllResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = await params;
  const resource = await getResourceBySlug(p.slug);
  if (!resource) return { title: "Resource Not Found" };
  return { title: resource.title, description: resource.excerpt };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const resource = await getResourceBySlug(p.slug);

  if (!resource) {
    notFound();
  }

  // Format date nicely
  const formattedDate = new Date(resource.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Resources
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm font-medium mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <Tag className="h-3.5 w-3.5" />
                {resource.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
              {resource.title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
              {resource.excerpt}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <div 
              className="max-w-none text-muted-text text-lg leading-relaxed [&>p]:mb-6 [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-ink [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>strong]:text-ink [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: resource.content || "<p>Content coming soon.</p>" }}
            />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
