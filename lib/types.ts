export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview?: string;
  components?: string[];
  agriculturalPurpose?: string[];
  benefits?: string[];
  useCases: string[];
  icon: string;
  colorAccent?: string;
  images: string[];
  createdAt: string;
  safetyInfo?: string;
}

export interface Dealer {
  id: string;
  name: string;
  province: string;
  district: string;
  municipality: string;
  ward: number;
  address: string;
  phone: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  productSlug?: string;
  createdAt: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  publishedAt: string;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  inquiryType: "general" | "dealer-partnership" | "bulk-order" | "product-question";
  province: string;
  district: string;
  municipality: string;
  ward: string;
}
