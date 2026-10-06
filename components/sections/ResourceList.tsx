"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, X, Calendar, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Resource } from "@/lib/types";

export function ResourceList({ resources, dict, locale = "en" }: { resources: any[], dict?: any, locale?: string }) {
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
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-gray-200 pb-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.resources.list.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-forest text-white shadow-md"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-forest/50 hover:text-forest"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={dict.resources.list.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-10 py-6 rounded-full border-gray-200 focus-visible:ring-forest focus-visible:border-forest bg-white w-full md:w-80 shadow-sm transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-900 font-semibold text-lg">{dict.resources.list.noArticles}</p>
            <p className="text-gray-500 mt-2">{dict.resources.list.tryDifferent}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((resource, i) => {
              const formattedDate = new Date(resource.publishedAt).toLocaleDateString(locale === "ne" ? "ne-NP" : "en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              });
              
              // Make every 3rd card span 2 columns on large screens for an asymmetric editorial look, if it's not the last single item
              const isLarge = i % 5 === 0;

              return (
                <Link
                  key={resource.id}
                  href={`/${locale}/resources/${resource.slug}`}
                  className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-forest/30 hover:shadow-xl transition-all duration-500 flex flex-col ${isLarge ? 'lg:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-forest uppercase tracking-wider">
                      <Tag className="h-3.5 w-3.5" />
                      {resource.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formattedDate}
                    </span>
                  </div>
                  
                  <h3 className={`font-heading font-bold text-gray-900 mb-4 group-hover:text-forest transition-colors leading-tight ${isLarge ? 'text-2xl lg:text-3xl lg:max-w-xl' : 'text-xl'}`}>
                    {resource.title}
                  </h3>
                  
                  <p className={`text-gray-600 font-serif leading-relaxed mb-8 flex-grow ${isLarge ? 'lg:text-lg lg:max-w-2xl' : 'text-base'}`}>
                    {resource.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-forest transition-colors">
                    {dict.resources.list.readArticle} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm font-medium">
            {dict.resources.list.showing} {filtered.length} {dict.resources.list.of} {resources.length} {dict.resources.list.resources}
          </p>
        </div>
      </div>
    </section>
  );
}
