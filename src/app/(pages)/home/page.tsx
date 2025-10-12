"use client";
import WrapperLayout from '@/app/WrapperLayout'
import CircularText from '@/components/Reactbit/CircularText/CircularText'
import LightRays from '@/components/Reactbit/LightRays/LightRays';
import ShinyText from '@/components/Reactbit/ShinyText/ShinyText'
import SplitText from '@/components/Reactbit/SplitText/SplitText'
import { ArrowRight, ChevronRight, Stars } from 'lucide-react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { AnimatedNumberInView } from '@/components/Counter';
import { Button } from '@/components/ui/button';
import Magnet from '@/components/Reactbit/Magnet/Magnet';
import Image from 'next/image';
import Link from 'next/link';
import TiltedCard from '@/components/Reactbit/TiltedCard/TiltedCard';
import InfiniteLogo from '@/components/InfiniteLogo';
import AnimatedContent from '@/components/Reactbit/AnimatedContent/AnimatedContent';
import MagicBento from '@/components/Reactbit/MagicBento/MagicBento';
import CircularGallery from '@/components/Reactbit/CircularGallery/CircularGallery';
import RotatingText from '@/components/Reactbit/RotatingText/RotatingText';
import InfiniteMenu from '@/components/Reactbit/InfiniteMenu/InfiniteMenu';
import Cookies from '@/components/Cookies';
import One from '@/components/Integrations/One';
import Two from '@/components/Integrations/Two';
import Three from '@/components/Integrations/Three';
import Four from '@/components/Integrations/Four';
import Testimonials from '@/components/Testimonials';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Building2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import RecentWork from '@/components/RecentWork';

const items = [
    {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://google.com/',
        title: 'Healthcare',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://google.com/',
        title: 'Eduction',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://google.com/',
        title: 'Gym',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://google.com/',
        title: 'Sports',
        description: 'This is pretty cool, right?'
    }
];

const HomePage = () => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    if (isInView && value === 0) {
        setValue(10000);
    }
    return (
        <WrapperLayout className='relative'>
            <div className="md:pt-40 pt-28 p-5 overflow-hidden relative w-full flex items-center justify-center flex-col">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                        maskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 85%)",
                    }}
                />
                <div className="absolute md:bottom-5 bottom-5 md:block hidden right-5">
                    <CircularText
                        text="FULL STACK DEVELOPMENT "
                        onHover="speedUp"
                        spinDuration={20}
                        className="font-normal"
                    />
                </div>
                <p className='glass px-3 pb-1 pt-0.5 flex items-center gap-1 mb-5 text-zinc-900 text-sm '>
                    <Stars size={15} />
                    Top Companay
                </p>
                <h1
                    className="md:text-7xl max-w-2xl !leading-tight mx-auto text-3xl font-semibold capitalize text-center text-black"
                >Building a better web, together</h1>
                <p className='max-w-2xl mx-auto text-center mt-6 z-10 md:text-lg text-zinc-700'>We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users.</p>

                <div className="flex items-center gap-2 mt-5">
                    <Magnet padding={50} disabled={false} magnetStrength={10}>
                        <Button className='cursor-pointer'>Get Started</Button>
                    </Magnet>
                    <Button className='bg-transparent cursor-pointer hover:bg-zinc-100 text-black border border-zinc-300'>Explore Work</Button>
                </div>

            </div>

            <div className='md:block hidden' style={{ height: '600px', position: 'relative' }}>
                <CircularGallery scrollSpeed={0.5} bend={3} textColor="#000" borderRadius={0.05} scrollEase={0.02} />
            </div>

            <div className="max-w-7xl gap-20 w-full md:px-12 p-4 mx-auto flex items-center justify-center md:mt-16 mt-10">
                <AnimatedNumberInView />
            </div>

            <section className="md:mt-16 mt-10">
                <div className="mx-auto max-w-7xl space-y-8 p-5 md:px-12 md:space-y-16">
                    <AnimatedContent>
                        <h2 className="relative z-10 max-w-2xl text-3xl font-medium leading-tight text-zinc-800 lg:text-5xl">Development Company in UAE, to fulfill your needs</h2>
                    </AnimatedContent>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-12">
                        <div className="relative mb-6 sm:mb-0">
                            <div className="bg-linear -to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent">
                                <AnimatedContent>
                                    <Image src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-[15px] w-full md:h-96 h-64 object-cover shadow " alt="payments illustration light" width={1207} height={600} />
                                </AnimatedContent>
                            </div>
                        </div>

                        <AnimatedContent>
                            <div className="relative space-y-4">
                                <p className="text-zinc-600">
                                    We have become the top-notch software development services provider primarily due to our years of experience, creative solutions, and dedication to quality. Our team of creative, offshore developers and designers turns concepts into reality.
                                </p>
                                <p className="text-zinc-600">Quzex understands that every business is unique. We serve them with innovative solutions that help them overcome business challenges.</p>

                                <div className="pt-6 text-zinc-600">
                                    <blockquote className="border-l-4 pl-4">
                                        <p>Our goal is to give businesses peace of mind and allow them to concentrate on their primary business operations by offering continuous support and maintenance.</p>

                                        <div className="mt-6 space-y-1">
                                            <cite className="block font-medium">Muhammad Talha, CEO</cite>
                                            <Image className="h-8 w-fit invert opacity-50" src="/quzex.png" alt="Quzex" height="30" width="500" />
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl w-full  mx-auto p-5 md:px-12 md:mt-16 mt-10'>
                <h2 className='text-center font-semibold text-zinc-800 md:text-5xl text-4xl'>Our Services</h2>
                <p className='text-center max-w-3xl mx-auto text-zinc-600 mt-3'>   We offer creative, customized digital solutions — from web design to branding — to help your business stand out and grow online with purpose and precision.
                </p>
                <div className=' grid md:mt-16 mt-10 gap-y-14 gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
                    <div className="">

                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
                            altText="Website Desgin"
                            captionText="Website Desgin"
                            containerHeight="330px"
                            containerWidth="350px"
                            imageHeight="330px"
                            imageWidth="350px"
                            rotateAmplitude={12}
                            scaleOnHover={1.07}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="bg-white px-2 py-1 mt-4 ml-4 !rounded-lg text-[15px]">
                                    Website Desgin
                                </p>
                            }
                        />
                        <div className="md:px-5 px-2">
                            <h2 className='text-zinc-800 mt-4 font-medium text-2xl'>Website Design</h2>
                            <p className='text-zinc-600 mb-2 mt-1 line-clamp-3'>Whether you want to build a new website from scratch or redesign an old one, we customize our strategy to fit your particular requirements and objectives. We develop interactive websites by blending innovative designs with functionality. Our team ensures that every minor detail aligns with your brand and company. Elevate your online presence with our custom web design services.                            </p>
                            <Button>View Detail <ArrowRight /></Button>
                        </div>
                    </div>
                    <div className="">

                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altText="Web Application"
                            captionText="Web Application"
                            containerHeight="330px"
                            containerWidth="350px"
                            imageHeight="330px"
                            imageWidth="350px"
                            rotateAmplitude={12}
                            scaleOnHover={1.07}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="bg-white px-2 py-1 mt-4 ml-4 !rounded-lg text-[15px]">
                                    Web Application
                                </p>
                            }
                        />
                        <div className="md:px-5 px-2">
                            <h2 className='text-zinc-800 mt-4 font-medium text-2xl'>Web Application</h2>
                            <p className='text-zinc-600 mt-1 line-clamp-3 mb-2'>From e-commerce platforms to sophisticated enterprise solutions, we ensure that our web app development services are robust, responsive, and aligned with your strategic objectives. With a focus on innovation and quality, StiffTech Solutions transforms your vision into a powerful web presence that stands out in the digital landscape. </p>
                            <Button>View Detail <ArrowRight /></Button>
                        </div>
                    </div>
                    <div className="">

                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altText="UI/UX Design"
                            captionText="UI/UX Design"
                            containerHeight="330px"
                            containerWidth="350px"
                            imageHeight="330px"
                            imageWidth="350px"
                            rotateAmplitude={12}
                            scaleOnHover={1.07}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="bg-white px-2 py-1 mt-4 ml-4 !rounded-lg text-[15px]">
                                    UI/UX Design
                                </p>
                            }
                        />
                        <div className="md:px-5 px-2">
                            <h2 className='text-zinc-800 mt-4 font-medium text-2xl'>UI/UX Design</h2>
                            <p className='text-zinc-600 mt-1 line-clamp-3 mb-2'>We use the latest technologies to guarantee smooth and captivating user experiences for your business platforms. With our top-notch UI/UX design services, discover the ideal balance between simple and appealing platforms.                            </p>
                            <Button>View Detail <ArrowRight /></Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:mt-16 mt-10">
                    <Magnet padding={50} disabled={false} magnetStrength={2} className='text-zinc-800 '>
                        <Link href="#" className="flex cursor-pointer  items-center gap-2">
                            View All Services
                            <ArrowRight />
                        </Link >
                    </Magnet>
                </div>
            </section>



            <div className="md:mt-20 mt-10">
                <InfiniteLogo />
            </div>

            <section className="w-full bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-4 md:px-10 md:mt-24 mt-12">
                    <div className="fle"></div>
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Recent Work</h2>
                        <p className="max-w-2xl text-sm text-muted-foreground">A clean selection of websites and apps we recently shipped.</p>
                    </div>

                    {/* Grid */}
                    <div className="mt-10 grid grid-cols-1 gap-5 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
                        <RecentWork />
                        <RecentWork />
                        <RecentWork />
                        <RecentWork />
                    </div>
                </div>
            </section>

            <section className="bg-background md:mt-32 mt-14">
                <div className="group relative m-auto max-w-5xl px-6">
                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <Link
                            href="/about#customers"
                            className="block text-sm duration-150 hover:opacity-75">
                            <span> See All Customers</span>

                            <ChevronRight className="ml-1 inline-block size-3" />
                        </Link>
                    </div>
                    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                        </div>

                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                alt="Lemon Squeezy Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/laravel.svg"
                                alt="Laravel Logo"
                                height="16"
                                width="auto"
                            />
                        </div>
                        <div className="flex">
                            <img
                                className="mx-auto h-7 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lilly.svg"
                                alt="Lilly Logo"
                                height="28"
                                width="auto"
                            />
                        </div>

                        <div className="flex">
                            <img
                                className="mx-auto h-6 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                alt="OpenAI Logo"
                                height="24"
                                width="auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex items-center md:px-10 justify-between max-w-7xl w-full px-5 mx-auto md:mt-36 mt-10 md:gap-12 gap-6 md:flex-row flex-col">
                <div className="md:w-[55%] w-full flex flex-col">
                    <div className="flex text-zinc-800 md:flex-row flex-col font-semibold md:text-5xl text-4xl gap-3 md:items-center items-start">
                        <h2 className='text-nowrap'>We Provided</h2>
                        <RotatingText
                            texts={['Growth', 'Excellence', 'Quality', 'solutions', 'Support']}
                            mainClassName="px-2 transition-all duration-500 sm:px-2 md:px-3 bg-[#000] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>
                    <p className='text-zinc-600 mt-5'>
                        At our full-stack development company, we deliver more than just code —
                        we provide end-to-end solutions that drive <span className="font-semibold">growth</span>,
                        ensure <span className="font-semibold">quality</span>, and create long-term <span className="font-semibold">value  </span>
                        for our clients. From building modern web applications to deploying secure
                        cloud infrastructure, we focus on scalable and reliable results. <br /><br />
                        Every project is approached with a commitment to <span className="font-semibold">excellence</span>,
                        transparent communication, and ongoing <span className="font-semibold">support</span> —
                        helping businesses of all sizes turn their ideas into impactful digital products.
                    </p>

                    <div className="mt-5">
                        <Link href="#" className=" cursor-pointer">
                            <Magnet padding={50} disabled={false} magnetStrength={5}>
                                <Button>View Work</Button>
                            </Magnet>
                        </Link>
                    </div>
                </div>
                <div className="md:w-[45%] w-full">
                    <Image src={"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='image' width={500} height={600} className='rounded-xl -scale -x-100 object-cover md:h-[26rem] object-right w-full' />
                </div>
            </div>

            <section className="w-full bg-background md:mt-24 mt-12 text-foreground">
                <div className="mx-auto max-w-7xl p-5 md:px-10">
                    <p className="text-sm text-muted-foreground"> Why client choose us</p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                        Social proof section title that
                        <br className="hidden sm:block" /> focuses on trust and results
                    </h2>

                    <div className="relative mt-12 grid gap-12 lg:grid-cols-2">
                        <Separator orientation="vertical" className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block" />

                        <article>
                            <blockquote className="text-xl font-medium leading-8 md:text-xl">
                                “QUZEX took our loose brief and turned it into a clean, fast site that finally feels like us.
                                They met every deadline, explained decisions in plain language, and shipped a CMS my team
                                can actually use. Within a few weeks our pages loaded faster and demo requests noticeably
                                increased. Couldn’t be happier.”
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="https://i.pravatar.cc/100?img=12" alt="Lando Norris" />
                                    <AvatarFallback>LN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-base font-semibold">Lando Norris</p>
                                    <p className="text-sm text-muted-foreground">Founder at Acme Inc.</p>
                                </div>
                            </div>
                        </article>

                        <Separator className="lg:hidden" />

                        <article>
                            <blockquote className="text-xl font-medium leading-8 md:text-xl">
                                “From kickoff to launch the process felt effortless. The QUZEX team responded quickly,
                                iterated on feedback the same day, and sweated the little details. The new site looks
                                premium on mobile and desktop, and our marketing team can publish updates in minutes
                                instead of hours.”
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="https://i.pravatar.cc/100?img=36" alt="Lando Norris" />
                                    <AvatarFallback>LN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-base font-semibold">Lando Norris</p>
                                    <p className="text-sm text-muted-foreground">Founder at Acme Inc.</p>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

        </WrapperLayout>
    )
}

export default HomePage