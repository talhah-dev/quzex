import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import {
    Target,
    ClipboardList,
    CalendarCheck,
    Map,
    GitBranch,
    Flag,
    CheckCircle,
    FileText,
} from 'lucide-react'
import { InfiniteSlider } from '../../../components/motion-primitives/infinite-slider'
import Image from 'next/image'

const Two = () => {
    return (
        <section>
            <div className="md:py-20 py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
                        />
                        {/* Row 1 */}
                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard>
                                    <ClipboardList />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Map />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GitBranch />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <FileText />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Flag />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Row 2 (reverse) */}
                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
                                <IntegrationCard>
                                    <GitBranch />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <FileText />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <ClipboardList />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Flag />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Map />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard>
                                    <CheckCircle />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <FileText />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Map />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GitBranch />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Flag />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        {/* Center icon */}
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                                isCenter={true}
                            >
                                <Image src={"/quzexIcon.png"} alt='quzex icon' width={100} height={100} className='brightness-0'/>
                            </IntegrationCard>
                        </div>
                    </div>

                    {/* Step content */}
                    <div className="mx-auto mt-12 md:mt-24 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                            Planning & Strategy
                        </h2>
                        <p className="text-muted-foreground">
                            We turn insights into a plan—defining scope, milestones, and timelines. This gives you a clear roadmap aligned with your goals for efficient execution.
                        </p>

                        <Button variant="outline" size="sm" asChild>
                            <Link href="#strategy">See Your Project Plan</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Two

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
                'bg-background relative z-20 flex size-12 rounded-full border',
                className
            )}
        >
            <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>
                {children}
            </div>
        </div>
    )
}