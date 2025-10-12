import WrapperLayout from '@/app/WrapperLayout'
import React from 'react'
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

const Contact = () => {
    return (
        <WrapperLayout>
            <section className="w-full bg-background md:pt-40 pt-28 text-foreground">
                <div className="mx-auto max-w-6xl px-5 md:px-10">
                    <div className="flex md:flex-row flex-col">
                        {/* Left column: info */}
                        <div className="md:max-w-[45%] w-full space-y-8">
                            <header className="space-y-3">
                                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Have a great idea?</h1>
                                <p className="text-muted-foreground">Tell us about it.</p>
                            </header>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Message us:</h3>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="#"
                                        aria-label="WhatsApp"
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition hover:shadow"
                                    >
                                        <FaWhatsapp className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="Instagram"
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition hover:shadow"
                                    >
                                        <FaInstagram className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-2 md:block hidden">
                                <h3 className="text-xl font-semibold">Contact us:</h3>
                                <Link href="mailto:hello@quzex.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                    <Mail className="h-4 w-4" /> hello@quzex.com
                                </Link>
                                <Link href="tel:+923152666263" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                    <Phone className="h-4 w-4" /> 03152666263
                                </Link>
                            </div>
                        </div>

                        {/* Right column: form */}
                        <div className="relative md:max-w-[55%] w-full">

                            <Image src={"/quzexIcon.png"} alt='logo' width={60} height={60} className='bg-black rounded-lg p-1 mx-auto -mb-6 z-10 relative md:block hidden' />

                            <Card className="rounded-2xl">
                                <CardContent className="p-6">
                                    <form className="space-y-8">
                                        {/* Row 1 */}
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium">Name</Label>
                                                <Input placeholder="Name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium">E‑mail</Label>
                                                <Input type="email" placeholder="abc@gmail.com" />
                                            </div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label className="text-sm font-medium">Phone / WhatsApp Number</Label>
                                                <Input placeholder="0300 0000 000" />
                                            </div>
                                            <div className="space-y-2 w-full">
                                                <Label className="text-sm font-medium">Project budget (USD)</Label>
                                                <Select>
                                                    <SelectTrigger className='w-full'>
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="lt1k">Less than $100</SelectItem>
                                                        <SelectItem value="1k-3k">$100 – $300</SelectItem>
                                                        <SelectItem value="3k-10k">$300 – $1000</SelectItem>
                                                        <SelectItem value="10k-25k">$1000 – $2500</SelectItem>
                                                        <SelectItem value="gt25k">Customize</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div className="space-y-3">
                                            <p className="text-sm font-medium">I'm interested in…</p>
                                            <div className="flex flex-wrap gap-3">
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Website Development</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Mobile Application</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Digital Marketing</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Branding</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Graphic Design</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Content Writing</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Social Media Marketing</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">SEO</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Other</button>
                                            </div>
                                        </div>

                                        {/* Project details */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Tell us more about your project</Label>
                                            <Textarea rows={6} placeholder="Something about your great idea" />
                                        </div>

                                        {/* How did you find us */}
                                        <div className="space-y-3">
                                            <p className="text-sm font-medium">How did you find us?</p>
                                            <div className="flex flex-wrap gap-3">
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Facebook</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">LinkedIn</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Instagram</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Website</button>
                                                <button type="button" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Others</button>
                                            </div>
                                        </div>

                                        <div>
                                            <Button type="submit" className="h-11 w-full rounded-xl">Submit the Request</Button>
                                            <p className='text-xs mt-2 text-center'>After submitting the form. We will contact you within 12 hours</p>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </WrapperLayout>
    )
}

export default Contact
