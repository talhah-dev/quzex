import WrapperLayout from '@/app/WrapperLayout'
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from 'lucide-react'
import { Check, Code2, MonitorSmartphone, Paintbrush, Rocket, Search, Shield, Headphones } from "lucide-react";
import { AnimatedNumberInView } from '@/components/Counter';
import { Compass, PenTool } from "lucide-react";
import ClientLogo from '@/components/ClientLogo';
import { CLIENT_IMAGES } from '@/data/data';
const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
]
const About = () => {
    return (
        <WrapperLayout>
            <section className="relative w-full overflow-hidden bg-background text-foreground">

                <div className="mx-auto max-w-7xl md:pt-40 pt-28 px-5 md:px-8 md:py-24">
                    <div className="grid items-center md:gap-12 gap-5 lg:grid-cols-2">
                        {/* Left: copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs  backdrop-blur">
                                About QUZEX
                            </div>

                            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                                We design and build delightful products for the web.
                            </h1>

                            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                                QUZEX is a small, senior team crafting high‑performance websites and applications. We pair
                                thoughtful design with reliable engineering to ship work that looks great and drives results.
                            </p>

                            {/* Highlights */}
                            <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm md:grid-cols-2">
                                <li className="inline-flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4" /> Full‑stack development
                                </li>
                                <li className="inline-flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4" /> UI/UX design and strategy
                                </li>
                                <li className="inline-flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4" /> Performance & accessibility
                                </li>
                                <li className="inline-flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4" /> Ongoing support & growth
                                </li>
                            </ul>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button asChild className="h-11 rounded-xl px-6">
                                    <Link href="/contact">Start a project</Link>
                                </Button>
                                <Button asChild variant="outline" className="h-11 rounded-xl px-6">
                                    <Link href="/project">See our work</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right: image collage */}
                        <div className="relative">
                            <div className="">
                                <div className="">
                                    <div className="overflow-hidden rounded-2xl ring-1 ring-border/70">
                                        <AspectRatio ratio={16 / 12}>
                                            <img
                                                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                                                alt="Website launch screenshot"
                                                className="h-full w-full object-cover transform scale-x-[-1]"
                                            />
                                        </AspectRatio>
                                    </div>

                                </div>
                            </div>

                            {/* floating badge */}
                            <Badge className="absolute left-2 top-2 rounded-full px-3 py-1">Since 2020</Badge>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-background py-16" id='customers'>
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-center text-lg font-medium">Recent client we have had the privilege of working with.</h2>
                    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-4xl xl:grid-cols-5 grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                        {CLIENT_IMAGES.map((src, i) => (
                            <ClientLogo key={src} src={src} index={i + 1} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-6xl px-5 md:mt-20 mt-5 md:px-10">
                    <div className="grid items-start gap-10 lg:grid-cols-3">
                        {/* Left: heading & intro */}
                        <div className="lg:col-span-1">
                            <Badge variant="secondary" className="rounded-full">Company Essentials</Badge>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">What QUZEX is about</h2>
                            <p className="mt-3 text-muted-foreground">
                                We’re a focused studio building fast, accessible products. Strategy first, design that feels
                                effortless, and engineering that scales.
                            </p>

                            <div className="mt-6 grid grid-cols-3 items-center text-center rounded-2xl border bg-background/60 p-4">
                                <div>
                                    <div className="text-xl font-semibold">100%</div>
                                    <div className="text-xs text-muted-foreground">In‑house work</div>
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">4–8w</div>
                                    <div className="text-xs text-muted-foreground">Typical build</div>
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">Global</div>
                                    <div className="text-xs text-muted-foreground">UK • CA • US</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: responsive UL list of offerings/values */}
                        <div className="lg:col-span-2">
                            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <Code2 className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Full‑stack Development</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Modern stacks (Next.js, TypeScript) with clean architectures and maintainable code.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <MonitorSmartphone className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Web & Mobile Experiences</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Responsive, accessible interfaces that load fast and feel great on every device.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <Paintbrush className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Design & Brand Systems</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Thoughtful UI/UX and component libraries to keep teams moving quickly.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <Search className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Performance & SEO</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Core Web Vitals, semantic markup, and best practices baked in from day one.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <Shield className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Quality & Security</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Reviews, testing, and secure-by-default setups to protect your users.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="rounded-2xl border p-5">
                                    <div className="flex items-start gap-3">
                                        <Headphones className="mt-0.5 h-5 w-5" />
                                        <div>
                                            <h3 className="text-base font-semibold">Partnership & Support</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">Clear communication, roadmap guidance, and ongoing care after launch.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* Small footer line */}
                            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4" /> Everything we build is documented, versioned, and easy to extend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-6xl px-5 md:mt-20 mt-12 md:px-10">
                    <div className="relative overflow-hidden rounded-3xl border bg-background/60 p-5 md:p-12">
                        {/* soft background accents */}
                        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.muted/40)_0%,transparent_40%),radial-gradient(ellipse_at_bottom_right,theme(colors.muted/40)_0%,transparent_40%)]" />

                        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <Badge variant="secondary" className="rounded-full">Call to action</Badge>
                                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                                    Let’s build something great together.
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Tell us a bit about your project and we’ll come back with a clear plan, timeline, and estimate.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Button asChild className="h-11 rounded-xl px-6">
                                    <Link href="/contact">Start a project</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-6xl px-5 md:px-10 md:mt-20 mt-14">
                    {/* Header */}
                    <div className="flex flex-col items-start gap-2">
                        <Badge variant="secondary" className="rounded-full">How we work</Badge>
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A simple, proven process</h2>
                        <p className="max-w-2xl text-muted-foreground">Clear steps, predictable timelines, and tight feedback loops keep projects moving without surprises.</p>
                    </div>

                    {/* Steps grid */}
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Step 1 */}
                        <div className="rounded-2xl border p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">1</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <Compass className="h-5 w-5" />
                                        <h3 className="text-base font-semibold">Discover</h3>
                                        <Badge variant="outline" className="ml-auto">~ 3–5 days</Badge>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">Workshops to align on goals, success metrics, scope, and constraints. We come back with a clear plan.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="rounded-2xl border p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">2</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <PenTool className="h-5 w-5" />
                                        <h3 className="text-base font-semibold">Design</h3>
                                        <Badge variant="outline" className="ml-auto">~ 1–2 wks</Badge>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">Rapid prototypes and UI flows. We validate key interactions early so the build phase is smooth.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="rounded-2xl border p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">3</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <Code2 className="h-5 w-5" />
                                        <h3 className="text-base font-semibold">Build</h3>
                                        <Badge variant="outline" className="ml-auto">~ 2–4 wks</Badge>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">Production‑ready code with accessibility, performance, and SEO best practices baked in.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="rounded-2xl border p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">4</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <Rocket className="h-5 w-5" />
                                        <h3 className="text-base font-semibold">Launch & Grow</h3>
                                        <Badge variant="outline" className="ml-auto">ongoing</Badge>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">We ship, monitor, and iterate. Hand‑off docs, training, and options for ongoing support.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-10">
                        <p className="text-sm text-muted-foreground">Ready to move? We can outline your project in a short kickoff call.</p>
                        <Button asChild className="h-11 rounded-xl px-6">
                            <Link href="/contact">Book a free consult</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="md:mt-24 mt-14 dark:bg-transparent">
                <div className="mx-auto max-w-6xl border-t px-6">
                    <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-semibold sm:text-4xl capitalize lg:text-nowrap">Our team</h2>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-24">
                        <div className="grid gap-x-6 md:gap-y-12 grid-cols-2 lg:grid-cols-3">
                            {members.map((member, index) => (
                                <div
                                    key={index}
                                    className="group overflow-hidden">
                                    <img
                                        className="md:h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                        src={member.avatar}
                                        alt="team member"

                                    />
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between">
                                            <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                            <span className="text-xs">_0{index + 1}</span>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                            <Link
                                                href={member.link}
                                                className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                                {' '}
                                                Linktree
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>




        </WrapperLayout>
    )
}

export default About
