import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import Image from 'next/image'
const Signup = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="bg-muted relative hidden lg:block">
                <Image
                    src="/images/auth.png"
                    width={500}
                    height={1000}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <Image width={50} height={30} src="/quzex.png" className='brightness-0 w-auto h-10' alt="Logo" />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <form className={"flex flex-col gap-6"}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-semibold">Create account</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Enter your credentials
                                </p>
                            </div>
                            <div className="grid gap-5">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="Muhammad" required />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="••••••••" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Create Account
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="underline underline-offset-4">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup