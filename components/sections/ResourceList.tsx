"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Resource } from "@/lib/types";

export function ResourceList({ resources }: { resources: Resource[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(resources.map((r) => r.category)));
    return ["All", ...cats];
  }, [resources]);

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory =
        activeCategory === "All" || r.category === activeCategory;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [resources, search, activeCategory]);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-10 focus-visible:ring-forest bg-white"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-forest text-white"
                  : "bg-cream text-muted-text hover:bg-forest/10 hover:text-forest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-muted-text/30 mx-auto mb-4" />
          <p className="text-muted-text text-lg">No articles found.</p>
          <p className="text-muted-text text-sm mt-1">Try a different search term or category.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.slug}`}
              className="block bg-white rounded-xl p-8 border border-border hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-forest text-xs font-semibold uppercase tracking-wider">
                    {resource.category}
                  </span>
                  <h2 className="font-heading text-xl font-bold text-ink mt-1 mb-2 group-hover:text-forest transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-muted-text leading-relaxed mb-4">
                    {resource.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="text-center text-muted-text text-sm mt-8">
        Showing {filtered.length} of {resources.length} articles
      </p>
    </div>
  );
}
