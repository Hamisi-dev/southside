export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: SanityImage[];
  category?: Category;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface HeroData {
  title: string;
  subtitle: string;
  videoUrl: string;
}
