"use client";

import * as React from "react";
import WrapperLayout from "@/app/WrapperLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Light‑theme Terms of Service page for QUZEX
// Uses shadcn/ui + Tailwind. Static content, easy to adapt.
export default function TermsPage() {
    const effective = "October 12, 2025";

    return (
        <WrapperLayout>
            <section className="relative w-full bg-background text-foreground">
                {/* soft bg */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.muted/40)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_right,theme(colors.muted/40)_0%,transparent_45%)]" />

                <div className="mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-40">
                    {/* Hero */}
                    <header className="mb-8 space-y-2">
                        <Badge variant="secondary" className="rounded-full">Legal</Badge>
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
                        <p className="max-w-2xl text-muted-foreground">These Terms govern your access to and use of QUZEX’s website and related services.</p>
                        <p className="text-xs text-muted-foreground">Effective {effective}</p>
                    </header>

                    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                        {/* TOC */}
                        <aside className="hidden lg:block">
                            <nav className="sticky top-24 space-y-2 text-sm">
                                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
                                <ul className="space-y-2">
                                    <li><a className="hover:underline" href="#agreement">Agreement</a></li>
                                    <li><a className="hover:underline" href="#services">Services & scope</a></li>
                                    <li><a className="hover:underline" href="#accounts">Accounts & communications</a></li>
                                    <li><a className="hover:underline" href="#proposals">Proposals & engagements</a></li>
                                    <li><a className="hover:underline" href="#ip">Intellectual property</a></li>
                                    <li><a className="hover:underline" href="#acceptable-use">Acceptable use</a></li>
                                    <li><a className="hover:underline" href="#third-party">Third‑party services</a></li>
                                    <li><a className="hover:underline" href="#disclaimers">Disclaimers</a></li>
                                    <li><a className="hover:underline" href="#liability">Limitation of liability</a></li>
                                    <li><a className="hover:underline" href="#law">Governing law</a></li>
                                    <li><a className="hover:underline" href="#changes">Changes</a></li>
                                    <li><a className="hover:underline" href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </aside>

                        {/* Content */}
                        <main className="space-y-8">
                            <Card id="agreement">
                                <CardHeader>
                                    <CardTitle>1. Agreement to terms</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        By accessing or using the QUZEX website or any materials we publish (the “Services”), you agree to be
                                        bound by these Terms. If you do not agree, do not use the Services.
                                    </p>
                                    <p>
                                        These Terms are an agreement between you and <span className="text-foreground font-medium">QUZEX</span>,
                                        based in Karachi, Pakistan.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="services">
                                <CardHeader>
                                    <CardTitle>2. Services & scope</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        QUZEX provides design and development services for websites, web applications, mobile apps and related
                                        digital products. Some features may be informational only. We may update or discontinue parts of the
                                        Services at any time.
                                    </p>
                                    <p>
                                        Newsletter: If you subscribe, we collect only your email address to send updates. You can unsubscribe at
                                        any time.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="accounts">
                                <CardHeader>
                                    <CardTitle>3. Accounts & communications</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        You agree to provide accurate information in forms you submit (e.g., contact or newsletter). We will
                                        communicate with you by email at the address you provide.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="proposals">
                                <CardHeader>
                                    <CardTitle>4. Proposals, quotes & engagements</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        Project‑specific work (scope, deliverables, timelines, fees) is governed by a separate written agreement
                                        such as a proposal, quote, or statement of work. If there is a conflict, the written agreement controls for
                                        that project.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="ip">
                                <CardHeader>
                                    <CardTitle>5. Intellectual property</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        Unless otherwise stated in a project agreement, all content on the site—including text, graphics, logos,
                                        and code—is owned by QUZEX or our licensors and protected by applicable laws. You may not copy, modify,
                                        or distribute content without permission.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="acceptable-use">
                                <CardHeader>
                                    <CardTitle>6. Acceptable use</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-muted-foreground">
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>No unlawful, infringing, or harmful activity.</li>
                                        <li>No attempts to access or disrupt systems without authorization.</li>
                                        <li>No automated scraping or rate‑limiting abuse.</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card id="third-party">
                                <CardHeader>
                                    <CardTitle>7. Third‑party services & links</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        The site may contain links or integrations provided by third parties. We do not control and are not
                                        responsible for their content or practices. Your use of third‑party services is subject to their terms.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="disclaimers">
                                <CardHeader>
                                    <CardTitle>8. Disclaimers</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        The Services are provided on an “as is” and “as available” basis. To the fullest extent permitted by law,
                                        we disclaim all warranties, express or implied, including merchantability, fitness for a particular
                                        purpose, and non‑infringement.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="liability">
                                <CardHeader>
                                    <CardTitle>9. Limitation of liability</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        To the maximum extent permitted by law, QUZEX and its owners, employees, and agents will not be liable for
                                        any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenues,
                                        data, or goodwill arising from or related to your use of the Services.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="law">
                                <CardHeader>
                                    <CardTitle>10. Governing law</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        These Terms are governed by the laws of Pakistan. Courts located in Karachi, Pakistan will have
                                        exclusive jurisdiction, unless a different venue is specified in a project‑specific agreement.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="changes">
                                <CardHeader>
                                    <CardTitle>11. Changes to these Terms</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We may update these Terms periodically. When we post changes, we will update the effective date above. If
                                        a change is material, we may provide additional notice.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="contact">
                                <CardHeader>
                                    <CardTitle>12. Contact</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        Questions? Contact us at <a className="underline" href="mailto:hello@quzex.com">hello@quzex.com</a>.
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="text-xs text-muted-foreground">This template is provided for general information only and does not constitute legal advice.</p>

                            <Separator />
                        </main>
                    </div>
                </div>
            </section>
        </WrapperLayout>
    );
}
