import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import {
  Rocket,
  CheckCircle2,
  ShieldCheck,
  LifeBuoy,
  RefreshCcw,
  FileText,
  BarChart3,
} from 'lucide-react'
import Image from 'next/image'

const Four = () => {
  return (
    <section>
      <div className="bg-muted py-20 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="dark:bg-muted/50 relative mx-auto w-fit">
            <div
              role="presentation"
              className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
            />
            {/* Row 1 */}
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <ShieldCheck />
              </IntegrationCard>
              <IntegrationCard>
                <CheckCircle2 />
              </IntegrationCard>
            </div>

            {/* Row 2 (center highlighted) */}
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <LifeBuoy />
              </IntegrationCard>
              <IntegrationCard
                borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                className="dark:bg-white/10"
              >
                <Image src={"/quzexIcon.png"} alt='quzex icon' width={100} height={100} className='brightness-0'/>
              </IntegrationCard>
              <IntegrationCard>
                <RefreshCcw />
              </IntegrationCard>
            </div>

            {/* Row 3 */}
            <div className="mx-auto flex w-fit justify-center gap-2">
              <IntegrationCard>
                <FileText />
              </IntegrationCard>
              <IntegrationCard>
                <BarChart3 />
              </IntegrationCard>
            </div>
          </div>

          {/* Step content */}
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Delivery & Support
            </h2>
            <p className="text-muted-foreground">
              We launch with confidence, providing clear documentation and training. After launch, we monitor, update, and support your product to keep it healthy and reliable.
            </p>

            <Button variant="outline" size="sm" asChild>
              <Link href="#support">View Support Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Four

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode
  className?: string
  borderClassName?: string
}) => {
  return (
    <div
      className={cn(
        'bg-background relative flex size-20 rounded-xl dark:bg-transparent',
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          'absolute inset-0 rounded-xl border border-black/20 dark:border-white/25',
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  )
}