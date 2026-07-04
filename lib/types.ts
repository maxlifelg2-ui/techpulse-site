export type Category =
  | "televisions"
  | "soundbars"
  | "vacuum_cleaners"
  | "washing_machines"
  | "refrigerators"
  | "dishwashers"
  | "deals"
  | "events"
  | "audio"
  | "smart_home"
  | "general_tech";

export const CATEGORY_LABELS: Record<Category, string> = {
  televisions: "טלוויזיות",
  soundbars: "סאונדבארים",
  vacuum_cleaners: "שואבי אבק",
  washing_machines: "מכונות כביסה",
  refrigerators: "מקררים",
  dishwashers: "מדיחים",
  deals: "מבצעים",
  events: "אירועים",
  audio: "אודיו",
  smart_home: "בית חכם",
  general_tech: "טכנולוגיה",
};

export interface Article {
  slug: string;
  headline: string;
  dek: string; // sub-headline / teaser
  category: Category;
  publishedAt: string; // ISO date
  bodyHtml: string; // rendered article HTML, self-contained
  heroLabel: string; // short spec-style label e.g. "OLED · 55 אינץ' · ₪8,990"
  readMinutes: number;
  imageUrl?: string;
  featured?: boolean;
}
