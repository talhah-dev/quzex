import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import {
    Lightbulb,
    PhoneCall,
    Users,
    MessageSquare,
    Search,
    ClipboardList,
    CalendarCheck,
} from 'lucide-react'
import Image from 'next/image'

const One = () => {
    return (
        <section>
            <div className="py-20 bg-muted md:py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="aspect-16/10 group relative mx-auto flex max-w-[22rem] items-center justify-between sm:max-w-sm">
                        {/* rotating ring accents */}
                        <div
                            role="presentation"
                            className="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
                        />
                        <div
                            role="presentation"
                            className="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
                        />

                        {/* Outer ring */}
                        <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
                            <IntegrationCard className="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4">
                                <PhoneCall />
                            </IntegrationCard>
                            <IntegrationCard className="absolute top-0 -translate-y-1/2">
                                <Users />
                            </IntegrationCard>
                            <IntegrationCard className="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4">
                                <MessageSquare />
                            </IntegrationCard>
                        </div>

                        {/* Inner ring */}
                        <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%">
                            <IntegrationCard className="absolute top-0 -translate-y-1/2">
                                <Search />
                            </IntegrationCard>
                            <IntegrationCard className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4">
                                <ClipboardList />
                            </IntegrationCard>
                            <IntegrationCard className="absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4">
                                <CalendarCheck />
                            </IntegrationCard>
                        </div>

                        {/* Center badge */}
                        <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
                            <div className="bg-muted relative z-20 rounded-full border p-1">
                                <IntegrationCard
                                    className="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
                                    isCenter={true}
                                >
                                    <Image src={"/quzexIcon.png"} alt='quzex icon' width={100} height={100} className='brightness-0'/>
                                </IntegrationCard>
                            </div>
                        </div>
                    </div>

                    {/* Step content */}
                    <div className="relative z-20 mx-auto mt-12 max-w-lg space-y-6 from-55% text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                            Discovery & Consultation
                        </h2>
                        <p className="text-muted-foreground">
                            We start with a discovery session to understand your goals and users. Together we refine scope, priorities, and metrics to shape a strategy tailored to your business.
                        </p>

                        <Button variant="outline" size="sm" asChild>
                            <Link href="#contact">Book a Discovery Call</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default One

const IntegrationCard = ({
    children,
    className,
    isCenter = false,
}: {
    children: React.ReactNode
    className?: string
    isCenter?: boolean
}) => {
    return (
        <div
            className={cn(
                'relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md',
                className
            )}
        >
            <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>
                {children}
            </div>
        </div>
    )
}
