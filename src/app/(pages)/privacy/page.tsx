import WrapperLayout from '@/app/WrapperLayout'
import React from 'react'
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield, Lock, Globe, FileText, UserX } from "lucide-react";

const Privacy = () => {
    const effective = "October 12, 2025";
    return (
        <WrapperLayout>
            <div className="bg-background text-foreground pt-40">
                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.muted/60)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_right,theme(colors.muted/60)_0%,transparent_45%)]" />
                    <div className="mx-auto max-w-6xl px-6 pb-8 md:px-8">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
                            <p className="text-sm text-muted-foreground">Effective {effective}</p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Body */}
                <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
                    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
                        {/* TOC */}
                        <aside className="hidden lg:block">
                            <nav className="sticky top-24 space-y-2 text-sm">
                                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
                                <ul className="space-y-2">
                                    <li><a className="hover:underline" href="#who-we-are">Who we are</a></li>
                                    <li><a className="hover:underline" href="#scope">Scope</a></li>
                                    <li><a className="hover:underline" href="#data-we-collect">Data we collect</a></li>
                                    <li><a className="hover:underline" href="#how-we-use">How we use data</a></li>
                                    <li><a className="hover:underline" href="#sharing">Sharing</a></li>
                                    <li><a className="hover:underline" href="#retention-security">Retention & security</a></li>
                                    <li><a className="hover:underline" href="#your-rights">Your rights</a></li>
                                    <li><a className="hover:underline" href="#changes">Changes</a></li>
                                    <li><a className="hover:underline" href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </aside>

                        {/* Content */}
                        <main className="space-y-8">
                            <Card id="who-we-are">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5" /> Who we are</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        <strong className="text-foreground">QUZEX</strong> is based in Karachi, Pakistan. This Privacy Policy
                                        explains how we handle personal information when you use our website and related services.
                                    </p>
                                    <p>
                                        Contact for privacy inquiries: <a className="underline" href="mailto:abc@email.com">abc@email.com</a>.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="scope">
                                <CardHeader>
                                    <CardTitle>Scope</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        This policy covers our public website, web applications, mobile apps, and related software development services we provide.
                                        Our audience is primarily in the UK, Canada, Australia, and the United States.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="data-we-collect">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Data we collect</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We only collect your <strong className="text-foreground">email address</strong> when you voluntarily subscribe to our newsletter.
                                    </p>
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>No billing information is collected.</li>
                                        <li>No user‑generated content is stored.</li>
                                        <li>No cookies or tracking technologies are used on our services at this time.</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card id="how-we-use">
                                <CardHeader>
                                    <CardTitle>How we use your email</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We use your email to send newsletters and updates, provide customer support, and share information about our services.
                                        You can unsubscribe at any time using the link in our emails or by contacting us.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="sharing">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Sharing</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We do <strong className="text-foreground">not sell or share</strong> your personal information. If we use a trusted email delivery provider
                                        to send newsletters, they act as our processor and may only process your email on our instructions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="retention-security">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Lock className="h-5 w-5" /> Retention & security</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We keep your email only as long as you remain subscribed or until you request deletion. We use reasonable technical and
                                        organizational safeguards such as encryption in transit and access controls to protect your information.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="your-rights">
                                <CardHeader>
                                    <CardTitle>Your choices & rights</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Unsubscribe from newsletters at any time.</li>
                                        <li>Request access, correction, or deletion of your email by contacting us.</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card id="changes">
                                <CardHeader>
                                    <CardTitle>Changes to this policy</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        We may update this Privacy Policy from time to time. We will post the updated version on this page and update the
                                        effective date above.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card id="contact">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Contact us</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        If you have questions or requests, email us at {" "}
                                        <a className="underline" href="mailto:abc@email.com">abc@email.com</a> or write to Karachi, Pakistan.
                                    </p>
                                    <p className="text-xs">This template is for general informational purposes and is not legal advice.</p>
                                </CardContent>
                            </Card>
                        </main>
                    </div>
                </section>
            </div>
        </WrapperLayout>
    )
}

export default Privacy
