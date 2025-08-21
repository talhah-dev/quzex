'use client';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { AnimatedNumber } from './motion-primitives/animated-number';

export function AnimatedNumberInView() {
    const targets = [200, 600, 192, 500];
    const labels = ["Projects Completed", "Happy Clients", "Active Users", "SaaS Deliveries"];
    const [values, setValues] = useState(targets.map(() => 0));
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            targets.forEach((target, i) => {
                setValues((prev) => {
                    const newVals = [...prev];
                    newVals[i] = target;
                    return newVals;
                });
            });
        }
    }, [isInView]);

    return (
        <div ref={ref} className='w-full flex flex-col items-center justify-center'>
            {/* Numbers with labels */}
            <div className='grid md:grid-cols-4 grid-cols-2 w-full md:gap-32 gap-10 gap-y-20 items-center justify-center'>
                {values.map((val, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <AnimatedNumber
                            className='inline-flex text-5xl font-medium text-zinc-300'
                            springOptions={{
                                bounce: 0,
                                duration: 3000, // duration in ms
                            }}
                            value={val}
                        />
                        <p className="mt-2 text-lg text-zinc-400">{labels[i]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}