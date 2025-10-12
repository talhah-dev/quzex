"use client";

import React from "react";
import WrapperLayout from "@/app/WrapperLayout";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Code2, Palette, Layers, Server, MonitorSmartphone, ShieldCheck, Bug, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

type Category = "All" | "Web Development" | "Design" | "Security & Testing";

type Service = {
    id: string;
    title: string;
    blurb: string;
    category: Exclude<Category, "All">;
    tags: string[];
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CATEGORIES: Category[] = ["All", "Web Development", "Design", "Security & Testing"];

const SERVICES: Service[] = [
    {
        id: "scratch",
        title: "Website from Scratch",
        blurb: "Strategy → design → build. A brand-new site tailored to your goals, fast and accessible.",
        category: "Web Development",
        tags: ["Next.js", "TypeScript", "SEO"],
        Icon: MonitorSmartphone,
    },
    {
        id: "redesign",
        title: "Website Redesign",
        blurb: "Refresh UX, structure, and visuals without losing SEO. Ship a modern look that converts.",
        category: "Design",
        tags: ["UI/UX", "Audit", "SEO"],
        Icon: Layers,
    },
    {
        id: "fullstack",
        title: "Full-Stack Development",
        blurb: "Production-ready front-end + back-end with clean architectures and maintainable code.",
        category: "Web Development",
        tags: ["Next.js", "Node.js", "Prisma"],
        Icon: Code2,
    },
    {
        id: "frontend",
        title: "Front-End Engineering",
        blurb: "Pixel-perfect UIs, accessible components, and snappy performance on every device.",
        category: "Web Development",
        tags: ["React", "Tailwind", "A11y"],
        Icon: MonitorSmartphone,
    },
    {
        id: "backend",
        title: "Back-End & APIs",
        blurb: "Robust APIs, auth, data models, and integrations with best practices baked in.",
        category: "Web Development",
        tags: ["Node.js", "REST/GraphQL", "PostgreSQL"],
        Icon: Server,
    },
    {
        id: "figma",
        title: "Figma UI/UX Design",
        blurb: "Wireframes to polished design systems. Clear flows, scalable components, and specs.",
        category: "Design",
        tags: ["Figma", "Design System", "Prototyping"],
        Icon: Palette,
    },
    {
        id: "ads",
        title: "Ad Creative & Landing Pages",
        blurb: "High-impact ad visuals and focused landing pages built for conversions.",
        category: "Design",
        tags: ["Creatives", "CRO", "Copy"],
        Icon: Rocket,
    },
    {
        id: "security",
        title: "Security Audit & Hardening",
        blurb: "Audit configs, dependencies, and auth. Close gaps and ship safer releases.",
        category: "Security & Testing",
        tags: ["OWASP", "Auth", "Best Practices"],
        Icon: ShieldCheck,
    },
    {
        id: "qa",
        title: "QA & Testing Suite",
        blurb: "Automated tests and manual QA to prevent regressions and boost reliability.",
        category: "Security & Testing",
        tags: ["Unit", "Integration", "E2E"],
        Icon: Bug,
    },
];

const Services: React.FC = () => {
    const [activeCat, setActiveCat] = React.useState<Category>("All");
    const [query, setQuery] = React.useState("");

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        return SERVICES.filter((s) => {
            const inCategory = activeCat === "All" ? true : s.category === activeCat;
            const inQuery =
                q.length === 0 ||
                s.title.toLowerCase().includes(q) ||
                s.blurb.toLowerCase().includes(q) ||
                s.tags.join(" ").toLowerCase().includes(q);
            return inCategory && inQuery;
        });
    }, [activeCat, query]);

    return (
        <WrapperLayout>
            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-32">
                    {/* Heading + intro */}
                    <header className="max-w-3xl">
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Services</h1>
                        <p className="mt-4 text-muted-foreground">
                            From strategy and design to full-stack builds and rigorous testing—everything you need to launch
                            and grow a high-performing product.
                        </p>
                    </header>

                    {/* Filters + search */}
                    <div className="mt-8 md:mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCat(cat)}
                                    aria-pressed={activeCat === cat}
                                    className={[
                                        "rounded-full border px-4 py-2 text-sm transition",
                                        activeCat === cat ? "bg-foreground text-background" : "hover:bg-muted",
                                    ].join(" ")}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-80">
                            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                            <Input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search services…"
                                className="pl-9"
                            />
                        </div>
                    </div>

                    {/* Grid of cards */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map(({ id, title, blurb, tags, Icon, category }) => (
                            <Card key={id} className="rounded-2xl">
                                <CardHeader className="pb-2">
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <CardTitle className="text-base">{title}</CardTitle>
                                            <CardDescription className="mt-0.5">{category}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">{blurb}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((t) => (
                                            <Badge key={t} variant="outline" className="rounded-full">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-0">
                                    <div className="flex w-full flex-wrap gap-2">
                                        <Button asChild size="sm" className="rounded-xl">
                                            <Link href={`/contact`}>Start project</Link>
                                        </Button>
                                        <Button asChild variant="outline" size="sm" className="rounded-xl">
                                            <Link href={`/services/${id}`}>Get a quote</Link>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </WrapperLayout>
    );
};

export default Services;
