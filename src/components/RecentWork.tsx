import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'

const RecentWork = () => {
    return (
        <div className="group space-y-3">
            <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={16 / 14}>
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop"
                        alt="Travel booking website"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </AspectRatio>
            </div>
            <p className="text-sm leading-6 text-muted-foreground line-clamp-2">
                Intuitive travel booking site with real‑time availability and streamlined checkout.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Next.js</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">TypeScript</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Prisma</span>
            </div>
        </div>
    )
}

export default RecentWork
