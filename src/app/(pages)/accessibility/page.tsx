"use client";

import React from "react";
import WrapperLayout from "@/app/WrapperLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    CheckCircle2,
    Keyboard,
    Focus,
    Eye,
    Image as ImageIcon,
    Globe,
    Mail,
} from "lucide-react";

export default function Accessibility() {
    const effective = "October 12, 2025";

    return (
        <WrapperLayout>
            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-40">
                    {/* Hero */}
                    <header className="mb-8 space-y-2">
                        <Badge variant="secondary" className="rounded-full">Accessibility</Badge>
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Accessibility at QUZEX</h1>
                        <p className="max-w-2xl text-muted-foreground">
                            We’re committed to a usable and inclusive experience for all visitors. This page explains our
                            standards, key features, and how to contact us if you encounter a barrier.
                        </p>
                        <p className="text-xs text-muted-foreground">Last updated {effective}</p>
                    </header>

                    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                        {/* TOC */}
                        <aside className="hidden lg:block">
                            <nav className="sticky top-24 space-y-2 text-sm">
                                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
                                <ul className="space-y-2">
                                    <li><a className="hover:underline" href="#standards">Standards</a></li>
                                    <li><a className="hover:underline" href="#features">Key features</a></li>
                                    <li><a className="hover:underline" href="#compat">Compatibility</a></li>
                                    <li><a className="hover:underline" href="#limitations">Known limitations</a></li>
                                    <li><a className="hover:underline" href="#feedback">Feedback & contact</a></li>
                                </ul>
                            </nav>
                        </aside>

                        {/* Content */}
                        <main className="space-y-8">
                            {/* Standards */}
                            <Card id="standards">
                                <CardHeader>
                                    <CardTitle>Standards we follow</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We aim to conform to <span className="font-medium text-foreground">WCAG 2.1 Level AA</span> across our
                                        public website and applications. Reviews are part of our design/development workflow.
                                    </p>
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Semantic HTML and appropriate ARIA</li>
                                        <li>Keyboard operability and logical focus order</li>
                                        <li>Sufficient color contrast and reduced‑motion support</li>
                                        <li>Descriptive labels, instructions, and error states on forms</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Features */}
                            <Card id="features">
                                <CardHeader>
                                    <CardTitle>Key accessibility features</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <li className="rounded-2xl border p-4">
                                            <div className="flex items-start gap-3">
                                                <Keyboard className="mt-0.5 h-5 w-5" />
                                                <div className="text-sm text-muted-foreground">
                                                    <p className="font-medium text-foreground">Keyboard navigation</p>
                                                    <p className="mt-1">All interactive elements can be reached and used via keyboard.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="rounded-2xl border p-4">
                                            <div className="flex items-start gap-3">
                                                <Focus className="mt-0.5 h-5 w-5" />
                                                <div className="text-sm text-muted-foreground">
                                                    <p className="font-medium text-foreground">Visible focus states</p>
                                                    <p className="mt-1">Clear focus indicators to avoid losing context during navigation.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="rounded-2xl border p-4">
                                            <div className="flex items-start gap-3">
                                                <Eye className="mt-0.5 h-5 w-5" />
                                                <div className="text-sm text-muted-foreground">
                                                    <p className="font-medium text-foreground">Contrast & readability</p>
                                                    <p className="mt-1">Text and UI components meet or exceed WCAG contrast ratios.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="rounded-2xl border p-4">
                                            <div className="flex items-start gap-3">
                                                <ImageIcon className="mt-0.5 h-5 w-5" />
                                                <div className="text-sm text-muted-foreground">
                                                    <p className="font-medium text-foreground">Text alternatives</p>
                                                    <p className="mt-1">Informative alt text for images and labels for icons where needed.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Compatibility */}
                            <Card id="compat">
                                <CardHeader>
                                    <CardTitle>Compatibility</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-muted-foreground">
                                    <p>We regularly test with modern browsers and assistive tech:</p>
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Chrome, Safari, Edge, Firefox (latest two versions)</li>
                                        <li>NVDA + Chrome (Windows), VoiceOver + Safari (macOS/iOS)</li>
                                        <li>TalkBack + Chrome (Android)</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Known limitations */}
                            <Card id="limitations">
                                <CardHeader>
                                    <CardTitle>Known limitations & third‑party content</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-muted-foreground">
                                    <p>
                                        Some embedded widgets or older documents may not fully meet our standards. We work with
                                        vendors to improve accessibility and provide alternatives when possible.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feedback */}
                            <Card id="feedback">
                                <CardHeader>
                                    <CardTitle>Feedback & contact</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        If you experience any difficulty with our content, please let us know. We review all
                                        requests and aim to respond promptly.
                                    </p>

                                    <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium" htmlFor="name">Name</label>
                                            <Input id="name" placeholder="Your name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                                            <Input id="email" type="email" placeholder="you@example.com" required />
                                        </div>
                                        <div className="sm:col-span-2 space-y-2">
                                            <label className="text-sm font-medium" htmlFor="url">Page URL (optional)</label>
                                            <Input id="url" type="url" placeholder="https://example.com/page" />
                                        </div>
                                        <div className="sm:col-span-2 space-y-2">
                                            <label className="text-sm font-medium" htmlFor="message">Describe the issue</label>
                                            <Textarea id="message" rows={6} placeholder="Tell us what happened and any assistive tech you use" required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <Button type="submit" className="h-11 rounded-xl">Send feedback</Button>
                                        </div>
                                    </form>

                                    <Separator className="my-6" />

                                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        Prefer email? Write to
                                        <a href="mailto:hello@quzex.com" className="ml-1 underline">hello@quzex.com</a>
                                    </div>
                                </CardContent>
                            </Card>

                            <p className="text-xs text-muted-foreground">
                                Note: This page summarizes our current approach and roadmap. We welcome suggestions to make your
                                experience better.
                            </p>
                        </main>
                    </div>
                </div>
            </section>
        </WrapperLayout>
    );
}
