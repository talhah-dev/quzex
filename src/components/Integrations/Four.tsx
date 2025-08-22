import { cn } from '@/lib/utils'
import { Link, LogOutIcon, MessageCirclePlusIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { GiEvilMinion } from 'react-icons/gi'
import { PiReplitLogo } from 'react-icons/pi'
import { SiVscodium } from 'react-icons/si'
import { DiAws } from 'react-icons/di'
import { BsGoogle } from 'react-icons/bs'

const Four = () => {
    return (
        <section>
            <div className="bg-muted py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="dark:bg-muted/50 relative mx-auto w-fit">
                        <div
                            role="presentation"
                            className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
                        <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <GiEvilMinion />
                            </IntegrationCard>
                            <IntegrationCard>
                                <PiReplitLogo />
                            </IntegrationCard>
                        </div>
                        <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <MessageCirclePlusIcon />
                            </IntegrationCard>
                            <IntegrationCard
                                borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                className="dark:bg-white/10">
                                <LogOutIcon />
                            </IntegrationCard>
                            <IntegrationCard>
                                <SiVscodium />
                            </IntegrationCard>
                        </div>

                        <div className="mx-auto flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <DiAws />
                            </IntegrationCard>

                            <IntegrationCard>
                                <BsGoogle />
                            </IntegrationCard>
                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2>
                        <p className="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>

                        <Button
                            variant="outline"
                            size="sm"
                            asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Four

const IntegrationCard = ({ children, className, borderClassName }: { children: React.ReactNode; className?: string; borderClassName?: string }) => {
    return (
        <div className={cn('bg-background relative flex size-20 rounded-xl dark:bg-transparent', className)}>
            <div
                role="presentation"
                className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    )
}