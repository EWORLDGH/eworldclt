import { queryOptions, useQuery } from "@tanstack/react-query";
import { useLocation } from "@tanstack/react-router";
import { getSiteContent, type ContentMap } from "./content.functions";
import { site as defaultSite } from "./site";
import type { Plan } from "@/components/site/Plans";

export const siteContentQuery = queryOptions({
  queryKey: ["site-content"],
  queryFn: () => getSiteContent(),
  staleTime: 60_000,
});

export type HeroContent = { eyebrow?: string; title?: string; body?: string; image?: string };
export type CtaContent = { title?: string; body?: string };
export type ContactContent = {
  address: string;
  phones: string[];
  mobile: string;
  emergency: string[];
  whatsapp: string;
  skype: string;
  emails: string[];
};

function useContentMap(): ContentMap {
  const { data } = useQuery(siteContentQuery);
  return data ?? {};
}

const clean = <T extends object>(o: T | undefined): Partial<T> =>
  Object.fromEntries(
    Object.entries(o ?? {}).filter(([, v]) => v !== "" && v != null && !(Array.isArray(v) && v.length === 0)),
  ) as Partial<T>;

export function useSite() {
  const map = useContentMap();
  return { ...defaultSite, ...clean(map["contact"] as unknown as ContactContent | undefined) };
}

export function useHero(path?: string): HeroContent {
  const map = useContentMap();
  const loc = useLocation();
  return clean(map[`hero:${path ?? loc.pathname}`] as unknown as HeroContent | undefined);
}

export function useCta(): CtaContent {
  return clean(useContentMap()["cta"] as unknown as CtaContent | undefined);
}

export function usePlans(defaults: Plan[]): Plan[] {
  const map = useContentMap();
  const loc = useLocation();
  const override = map[`plans:${loc.pathname}`] as unknown as Plan[] | undefined;
  return Array.isArray(override) && override.length ? override : defaults;
}
