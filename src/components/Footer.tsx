"use client";

import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

// Simple, static, responsive footer (no maps, no custom SVGs)
export default function Footer() {
    return (
        <footer className="bg-background text-foreground md:pt-28 pt-14">

            <section className="w-full">
                <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
                    <div className="grid items-start gap-6 md:grid-cols-2">
                        {/* Left: Heading & description */}
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">Subscribe to our newsletter</h2>
                            <p className="mt-3 text-muted-foreground">
                                Get the latest news and updates from our team.
                            </p>
                        </div>


                        {/* Right: Input + Button and helper text */}
                        <div className="w-full md:justify-self-end">
                            <form onSubmit={(e) => e.preventDefault()} className="flex w-full items-center gap-3">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-11 max-w-md"
                                    required
                                    aria-label="Email address"
                                />
                                <Button type="submit" className="h-11 px-6">
                                    Subscribe
                                </Button>
                            </form>
                            <p className="mt-3 text-sm text-muted-foreground">
                                By subscribing, you agree to our {" "}
                                <Link href="/privacy" className="underline underline-offset-4">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
                {/* Top */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Address / Contact / Socials */}
                    <div>
                        {/* Logo placeholder */}
                        <div className="">
                            <Image src={"/quzexIcon.png"} className="bg-black p-1 rounded-lg "  width={50} height={50} alt="Logo" />
                        </div>
                        <div className="mt-6 space-y-6">
                            <div>
                                <h3 className="text-base font-semibold">Address:</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pakistan, Karachi
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold">Contact:</h3>
                                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                                    <p>talha18513@gmail.com</p>
                                    <p>03152666263</p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-5">
                                <Link href="#" aria-label="Facebook" className="text-muted-foreground transition hover:text-foreground">
                                    <FaFacebook className="h-6 w-6" />
                                </Link>
                                <Link href="#" aria-label="Instagram" className="text-muted-foreground transition hover:text-foreground">
                                    <FaInstagram className="h-6 w-6" />
                                </Link>
                                <Link href="#" aria-label="X" className="text-muted-foreground transition hover:text-foreground">
                                    <FaXTwitter className="h-6 w-6" />
                                </Link>
                                <Link href="#" aria-label="YouTube" className="text-muted-foreground transition hover:text-foreground">
                                    <FaYoutube className="h-6 w-6" />
                                </Link>
                                <Link href="#" aria-label="WhatsApp" className="text-muted-foreground transition hover:text-foreground">
                                    <FaWhatsapp className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <nav aria-label="Footer" className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3 md:grid-cols-3">
                        <div>
                            <h3 className="text-base font-semibold">Company</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li>
                                    <Link href="/" className="text-muted-foreground transition hover:text-foreground">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-muted-foreground transition hover:text-foreground">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-muted-foreground transition hover:text-foreground">Services</Link>
                                </li>
                                <li>
                                    <Link href="/work" className="text-muted-foreground transition hover:text-foreground">Work</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-muted-foreground transition hover:text-foreground">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold">Resources</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">FAQ</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">Support</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">Careers</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground transition hover:text-foreground">Partners</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold">Account</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li>
                                    <Link href="/signup" className="text-muted-foreground transition hover:text-foreground">Sign up</Link>
                                </li>
                                <li>
                                    <Link href="/login" className="text-muted-foreground transition hover:text-foreground">Login</Link>
                                </li>
                                <li>
                                    <Link href="/accessibility" className="text-muted-foreground transition hover:text-foreground">Accessibility</Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-muted-foreground transition hover:text-foreground">Terms</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <Separator className="my-10" />

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-muted-foreground">
                        Copyright © 2025 QUZEX. All rights reserved.
                    </p>
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                        <li>
                            <Link href="/privacy" className="text-muted-foreground transition hover:text-foreground">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-muted-foreground transition hover:text-foreground">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
