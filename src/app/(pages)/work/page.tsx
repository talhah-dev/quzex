"use client";

import React from "react";
import Link from "next/link";
import WrapperLayout from "@/app/WrapperLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowUpRight, Search as SearchIcon } from "lucide-react";

// Different design from Services: image-first showcase cards with overlay, chip filters, and search

type Project = {
    id: string;
    title: string;
    description: string;
    year: string;
    image: string;
    tags: string[];
    href: string;
};

const TAGS = [
    "All",
    "Web",
    "SaaS",
    "E‑commerce",
    "Branding",
    "Fintech",
    "Mobile",
    "Landing",
    "Dashboard",
] as const;

type Tag = (typeof TAGS)[number];

const PROJECTS: Project[] = [
    {
        id: "velora-fashion",
        title: "Velora Fashion Store",
        description: "Headless e‑commerce with lightning checkout and refined product UX.",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "E‑commerce", "Landing"],
        href: "#",
    },
    {
        id: "pulse-analytics",
        title: "Pulse Analytics",
        description: "Real‑time SaaS dashboard with multi‑tenant auth and charting.",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "SaaS", "Dashboard"],
        href: "#",
    },
    {
        id: "oberon-portfolio",
        title: "Studio Oberon",
        description: "Minimal portfolio focused on imagery and buttery interactions.",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1504691342899-9cd26c04b1cd?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "Branding", "Landing"],
        href: "#",
    },
    {
        id: "la-piazza",
        title: "La Piazza Restaurant",
        description: "Reservations, menu CMS, and vivid photography for conversion.",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1611162618071-b39a2ec2cfb7?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "Landing"],
        href: "#",
    },
    {
        id: "nebula-dev",
        title: "Nebula Dev Agency",
        description: "Bold landing with purposeful typography and clear CTA flow.",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "Landing", "Branding"],
        href: "#",
    },
    {
        id: "monaro-pay",
        title: "Monaro Pay",
        description: "Trust‑forward fintech microsite with accessible forms.",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "Fintech"],
        href: "#",
    },
    {
        id: "travelly",
        title: "Travelly App",
        description: "Mobile companion pages for itinerary planning and bookings.",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
        tags: ["Mobile", "Landing"],
        href: "#",
    },
    {
        id: "health-dash",
        title: "HealthOps Dashboard",
        description: "Operational insights with role‑based access and audit trails.",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
        tags: ["Web", "Dashboard"],
        href: "#",
    },
];

export default function Work() {
    const [activeTag, setActiveTag] = React.useState<Tag>("All");
    const [query, setQuery] = React.useState("");

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        return PROJECTS.filter((p) => {
            const tagOk = activeTag === "All" ? true : p.tags.includes(activeTag);
            const qOk =
                q.length === 0 ||
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tags.join(" ").toLowerCase().includes(q);
            return tagOk && qOk;
        });
    }, [activeTag, query]);

    return (
        <WrapperLayout>
            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-40">
                    {/* Header */}
                    <header className="flex flex-col gap-2">
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Work</h1>
                        <p className="max-w-2xl text-muted-foreground">
                            A selection of recent projects and case studies. Filter by tag or search by name, feature, or
                            industry.
                        </p>
                    </header>

                    {/* Controls */}
                    <div className="mt-6 md:mt-10 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
                        <div className="-mx-1 flex snap-x items-center gap-2 overflow-x-auto px-1 pb-1">
                            {TAGS.map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => setActiveTag(t)}
                                    aria-pressed={activeTag === t}
                                    className={[
                                        "snap-start rounded-full px-4 py-2 text-sm transition",
                                        activeTag === t
                                            ? "bg-foreground text-background"
                                            : "border hover:bg-muted",
                                    ].join(" ")}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-80">
                            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                            <Input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects…"
                                className="pl-9"
                            />
                        </div>
                    </div>

                    {/* Grid (image-first overlay cards) */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((p) => (
                            <article key={p.id} className="group overflow-hidden rounded-2xl ring-1 ring-border">
                                <Link href={p.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <div className="relative">
                                        <AspectRatio ratio={16 / 10}>
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                            />
                                        </AspectRatio>
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent p-4 pt-16">
                                            <div className="mb-2 flex flex-wrap gap-2">
                                                {p.tags.map((t) => (
                                                    <Badge key={t} variant="secondary" className="rounded-full">
                                                        {t}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex items-center justify-between p-4">
                                    <span className="text-xs text-muted-foreground">{p.year}</span>
                                    <Button asChild variant="ghost" size="sm" className="gap-1">
                                        <Link href={p.href}>
                                            Case study <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="mt-16 rounded-2xl border p-8 text-center">
                            <p className="text-sm text-muted-foreground">No projects match your filters. Try a different tag or search term.</p>
                        </div>
                    )}
                </div>
            </section>
        </WrapperLayout>
    );
}
