"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Users, FileCheck2, FolderSearch, Stethoscope, FileText, Database, Scale, Headphones,
  Search, ChevronDown, ChevronUp, Menu, X, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { serviceHref, services } from "@/data/services";
import { useBooking } from "@/components/booking/BookingProvider";

const ICONS: Record<string, LucideIcon> = {
  "lead-management": Users,
  "deposition-summarization": FileText,
  "contract-management": FileCheck2,
  "e-discovery": Database,
  "record-retrieval": FolderSearch,
  "litigation-support": Scale,
  "medical-record-review": Stethoscope,
  "call-audit": Headphones,
};

const NAV = [
  { label: "Verticals", href: "/verticals" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { openBooking } = useBooking();

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  // Esc closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when mobile menu or modal is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openServices = () => {
    if (timer.current) clearTimeout(timer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    timer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return services.filter((s) => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      {/* Sticky: stays in the page flow (no content hidden underneath) and pins to the top on scroll */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-transparent bg-white/95 shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-white/85"
            : "border-b border-slate-200/80 bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
            isScrolled ? "h-16 lg:h-[68px]" : "h-20"
          }`}
        >
          {/* LOGO */}
          <Link
              href="/"
              className="group flex items-center"
              aria-label="Legal Assist - Home"
            >
              <Image
                src="/legalassistpro-logo.webp"
                alt="Legal Assist"
                width={200}
                height={48}
                priority
                style={{ width: "auto" }}
                className={`w-auto transition-all duration-300 group-hover:opacity-90 ${
                  isScrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
                }`}
              />
            </Link>

          {/* DESKTOP NAV */}
          <nav aria-label="Main" className="hidden items-center space-x-8 font-serif text-sm font-medium text-slate-700 lg:flex">
            <div onMouseEnter={openServices} onMouseLeave={closeServices}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-mega-menu"
                onClick={() => setServicesOpen((v) => !v)}
                onFocus={openServices}
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  servicesOpen ? "font-bold text-[#0B2240]" : "hover:text-[#0B2240]"
                }`}
              >
                Services
                {servicesOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
              </button>
            </div>

            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`transition-colors hover:text-[#0B2240] ${pathname === n.href ? "font-bold text-[#0B2240]" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center space-x-3 lg:flex">
            <button
              type="button"
              onClick={openBooking}
              aria-haspopup="dialog"
              className="cursor-pointer rounded-md bg-[#0B2240] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#123159] hover:shadow-lg"
            >
              Schedule A Free Call
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="cursor-pointer rounded-md bg-[#0B2240] p-2.5 text-white transition-colors hover:bg-[#123159]"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button type="button" onClick={() => setSearchOpen((v) => !v)} aria-label="Search"
              className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:text-[#0B2240]">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}
              className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:text-[#0B2240]">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        <div
          id="services-mega-menu"
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
          className={`absolute inset-x-0 top-full hidden border-b border-slate-200 bg-white shadow-2xl transition-all duration-300 lg:block ${
            servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-10">
            <ul className="grid grid-cols-4 gap-8">
              {services.map((s) => {
                const Icon = ICONS[s.slug] ?? FileText;
                return (
                  <li key={s.slug}>
                    <Link
                      href={serviceHref(s.slug)}
                      onClick={() => setServicesOpen(false)}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-slate-100 hover:bg-slate-50/80"
                    >
                      <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-sm transition-all duration-300 group-hover:bg-[#0B2240] group-hover:text-white">
                          <Icon className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <span className="mb-1.5 block font-serif text-base font-bold text-[#0B2240] transition-colors group-hover:text-amber-600">
                          {s.title}
                        </span>
                        <span className="block text-xs leading-relaxed text-slate-500">{s.desc}</span>
                      </div>
                      <span className="mt-4 flex items-center pt-2 text-[11px] font-bold uppercase tracking-wider text-[#0B2240] transition-colors group-hover:text-amber-600">
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Need tailored legal support for your practice area?</span>
              <div className="flex items-center gap-6">
                <Link href="/services" onClick={() => setServicesOpen(false)} className="font-bold text-[#0B2240] hover:text-amber-600">
                  View all services
                </Link>
                <button
                  type="button"
                  onClick={() => { setServicesOpen(false); openBooking(); }}
                  className="cursor-pointer font-bold text-[#0B2240] underline hover:text-amber-600"
                >
                  Schedule a consultation call →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        {searchOpen && (
          <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 text-white sm:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 shrink-0 text-amber-400" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                  if (e.key === "Enter" && results[0]) router.push(serviceHref(results[0].slug));                  }}
                  placeholder="Search services: eDiscovery, record retrieval, deposition summarization..."
                  className="w-full border-none bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {query.trim() && (
                <ul className="mt-3 divide-y divide-slate-800 border-t border-slate-800 text-sm">
                  {results.length === 0 && <li className="py-3 text-slate-400">No services found.</li>}
                  {results.map((s) => (
                    <li key={s.slug}>
                      <Link href={serviceHref(s.slug)} className="block py-3 hover:text-amber-400">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden ${isScrolled ? "pt-16" : "pt-20"}`}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="ml-auto flex h-full w-full max-w-sm flex-col justify-between space-y-6 overflow-y-auto bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="font-serif text-lg font-bold text-[#0B2240]">Menu</span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu"
                  className="rounded-lg bg-slate-100 p-1.5 text-slate-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-2 font-serif text-base font-bold text-slate-800"
                >
                  Services
                  {mobileServicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileServicesOpen && (
                  <ul className="my-2 space-y-3 border-l-2 border-slate-100 pl-4 pt-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={serviceHref(s.slug)} className="block text-sm font-semibold text-slate-600 hover:text-[#0B2240]">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="block py-2 font-serif text-base font-bold text-slate-800">
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => { setMobileOpen(false); openBooking(); }}
                className="w-full rounded-xl bg-[#0B2240] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
              >
                Schedule A Free Call
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}