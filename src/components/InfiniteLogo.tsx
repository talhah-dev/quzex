import React from 'react'
import LogoLoop from './Reactbit/LogoLoop/LogoLoop';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

const InfiniteLogo = () => {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    return (
        <div className="">

            <div style={{ height: '110px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    className=''
                    speed={80}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#060010"
                    ariaLabel="Technology partners"
                />
            </div>
            <div style={{ height: '110px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    className=''
                    speed={80}
                    direction="right"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#060010"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    )
}

export default InfiniteLogo