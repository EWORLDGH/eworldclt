import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, User, Users, UserPlus, ExternalLink } from "lucide-react";
import logoAsset from "@/assets/eworld-logo.png.asset.json";
import { site, telHref } from "@/lib/site";
import { primaryNav, accountLinks, type NavLink } from "@/lib/nav";

const accountIcon = { user: User, users: Users, userplus: UserPlus } as const;

function NavItemLink({ link, onNavigate }: { link: NavLink; onNavigate?: () => void }) {
  const cls =
    "flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground";
  if (link.to) {
    return (
      <Link to={link.to as never} onClick={onNavigate} className={cls}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={cls}>
      {link.label}
      <ExternalLink className="size-3.5 shrink-0 opacity-60" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="hidden border-b border-border/40 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-1 px-5 py-1.5">
          {accountLinks.map((a) => {
            const Icon = accountIcon[a.icon];
            return (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="size-3.5" /> {a.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Eworld Information Systems — home">
          <span className="inline-block transition-transform hover:scale-[1.03]">
            <img
              src={logoAsset.url}
              alt="Eworld Information Systems logo"
              width={301}
              height={78}
              className="h-9 w-auto"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) =>
            item.groups ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className={`invisible absolute right-0 top-full z-50 opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${
                    item.groups.length > 1 ? "w-[46rem]" : "w-64"
                  }`}
                >
                  <div
                    className={`mt-1 grid gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-glow ${
                      item.groups.length > 1 ? "grid-cols-2 xl:grid-cols-4" : "grid-cols-1"
                    }`}
                  >
                    {item.groups.map((g, i) => (
                      <div key={g.heading ?? i}>
                        {g.heading ? (
                          <p className="px-3 pb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                            {g.heading}
                          </p>
                        ) : null}
                        <div className="flex flex-col">
                          {g.links.map((l) => (
                            <NavItemLink key={l.label + (l.to ?? l.href)} link={l} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to as never}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(site.mobile)}
            className="hidden items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] xl:inline-flex"
          >
            <Phone className="size-4" /> {site.mobile}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-border/60 bg-background px-5 pb-6 lg:hidden">
          <div className="flex flex-wrap gap-2 py-3">
            {accountLinks.map((a) => {
              const Icon = accountIcon[a.icon];
              return (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="size-3.5" /> {a.label}
                </a>
              );
            })}
          </div>
          {primaryNav.map((item) => (
            <div key={item.label} className="border-t border-border/40 py-2">
              {item.to ? (
                <Link
                  to={item.to as never}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <p className="py-1.5 text-sm font-medium">{item.label}</p>
              )}
              {item.groups?.map((g, i) => (
                <div key={g.heading ?? i} className="pl-2">
                  {g.heading ? (
                    <p className="pt-2 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                      {g.heading}
                    </p>
                  ) : null}
                  {g.links.map((l) => (
                    <NavItemLink key={l.label + (l.to ?? l.href)} link={l} onNavigate={() => setOpen(false)} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
