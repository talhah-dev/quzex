"use client";
import WrapperLayout from '@/app/WrapperLayout'
import CircularText from '@/components/Reactbit/CircularText/CircularText'
import LightRays from '@/components/Reactbit/LightRays/LightRays';
import ShinyText from '@/components/Reactbit/ShinyText/ShinyText'
import SplitText from '@/components/Reactbit/SplitText/SplitText'
import { ArrowRight, Stars } from 'lucide-react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { AnimatedNumberInView } from '@/components/Counter';
import { Button } from '@/components/ui/button';
import Magnet from '@/components/Reactbit/Magnet/Magnet';
import Image from 'next/image';
import Link from 'next/link';
import TiltedCard from '@/components/Reactbit/TiltedCard/TiltedCard';
import InfiniteLogo from '@/components/InfiniteLogo';

const HomePage = () => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    if (isInView && value === 0) {
        setValue(10000);
    }
    return (
        <WrapperLayout className='relative pb-20'>
            <div className="h-dvh overflow-hidden relative w-full flex items-center justify-center flex-col">
                <div className="w-full absolute top-0 left-0 h-dvh">
                    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#fff"
                            raysSpeed={1.5}
                            lightSpread={0.8}
                            rayLength={1.2}
                            followMouse={true}
                            mouseInfluence={0.1}
                            noiseAmount={0.1}
                            distortion={0.05}
                            className="custom-rays"
                        />
                    </div>
                </div>
                <div className="absolute md:bottom-5 bottom-5 right-5">
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
                <SplitText
                    text="Welcome To"
                    className="md:text-5xl text-3xl mb-2 md:mb-0 tracking-widest text-center text-black"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <SplitText
                    text="QUZEX"
                    className="md:text-9xl text-7xl tracking-widest text-center text-black"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <p className='max-w-3xl mx-auto text-center mt-6 z-10 text-lg text-zinc-700'>We have become the top-notch software development services provider primarily due to our years of experience, creative solutions, and dedication to quality.</p>

                <div className="flex items-center gap-2 mt-5">
                    <Magnet padding={50} disabled={false} magnetStrength={10}>
                        <Button className=''>Get Started</Button>
                    </Magnet>
                    <Button className='bg-transparent text-black border border-zinc-300'>Learn More</Button>
                </div>

            </div>


            <div className="max-w-7xl gap-20 w-full md:px-12 p-4 mx-auto flex items-center justify-center md:mt-16 mt-10">
                <AnimatedNumberInView />
            </div>
            <section className="md:mt-24 mt-10">
                <div className="mx-auto max-w-7xl space-y-8 p-5 md:px-12 md:space-y-16">
                    <h2 className="relative z-10 max-w-2xl text-3xl font-medium leading-tight text-zinc-800 lg:text-5xl">Development Company in UAE, to fulfill your needs</h2>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-12">
                        <div className="relative mb-6 sm:mb-0">
                            <div className="bg-linear -to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent">
                                <Image src="https://images.unsplash.com/photo-1703969083653-da62f9ea70af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-[15px] w-full md:h-96 h-64 object-cover shadow " alt="payments illustration light" width={1207} height={600} />
                            </div>
                        </div>

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
                    </div>
                </div>
            </section>

            {/* <div className="flex items-center md:px-12 justify-between max-w-7xl w-full px-4 mx-auto md:mt-32 mt-10 md:gap-12 gap-6 md:flex-row flex-col">
                <div className="md:w-[55%] w-full flex flex-col">
                    <div className="flex text-white md:flex-row flex-col font-semibold md:text-5xl text-5xl gap-3 md:items-center items-start">
                        <h2 className='text-nowrap'>We Provided</h2>
                        <RotatingText
                            texts={['Growth', 'Excellence', 'Quality', 'solutions', 'Support']}
                            mainClassName="px-2 transition-all duration-500 sm:px-2 md:px-3 bg-[#5227ff] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
                    <p className='text-zinc-300 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque aliquid neque commodi rem nemo alias quidem rerum soluta iste ex optio sit, repudiandae voluptatem vitae? Illum harum saepe eos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /><br /> Rem repudiandae ratione facilis exercitationem quis tempora nobis aspernatur sequi dolorum, quos quidem magni recusandae, commodi vero hic repellendus sint atque dignissimos?</p>
                    <div className="mt-5">
                        <Link href="#" className=" cursor-pointer">
                            <Magnet padding={50} disabled={false} magnetStrength={5}>
                                <Button className='bg-white cursor-pointer hover:opacity-80 hover:!bg-white text-black'>View Work</Button>
                            </Magnet>
                        </Link>
                    </div>
                </div>
                <div className="md:w-[45%] w-full">
                    <Image src={"/images/img1.jpg"} alt='image' width={500} height={600} className='rounded-xl -scale-x-100 object-cover md:h-[26rem] object-right w-full' />
                </div>
            </div> */}

            <section className='max-w-7xl w-full  mx-auto p-5 md:px-12 md:mt-20 mt-10'>
                <h2 className='text-center font-medium text-zinc-800 md:text-5xl text-4xl'>Our Services</h2>
                <p className='text-center max-w-3xl mx-auto text-zinc-600 mt-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos earum dolorum repellendus doloremque minima alias delectus optio aliquam iste labore!</p>
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
                            <h2 className='text-zinc-800 mt-4 font-medium text-2xl'>Web Design</h2>
                            <p className='text-zinc-600 mt-1 line-clamp-3'>Whether you want to build a new website from scratch or redesign an old one, we customize our strategy to fit your particular requirements and objectives. We develop interactive websites by blending innovative designs with functionality. Our team ensures that every minor detail aligns with your brand and company. Elevate your online presence with our custom web design services.                            </p>
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
                            <p className='text-zinc-600 mt-1 line-clamp-3'>From e-commerce platforms to sophisticated enterprise solutions, we ensure that our web app development services are robust, responsive, and aligned with your strategic objectives. With a focus on innovation and quality, StiffTech Solutions transforms your vision into a powerful web presence that stands out in the digital landscape. </p>
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
                                <p className="bg-zinc-800 px-2 py-1 mt-4 ml-4 !rounded-lg text-[15px]">
                                    UI/UX Design
                                </p>
                            }
                        />
                        <div className="md:px-5 px-2">
                            <h2 className='text-zinc-800 mt-4 font-medium text-2xl'>UI/UX Design</h2>
                            <p className='text-zinc-600 mt-1 line-clamp-3'>We use the latest technologies to guarantee smooth and captivating user experiences for your business platforms. With our top-notch UI/UX design services, discover the ideal balance between simple and appealing platforms.                            </p>
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


        </WrapperLayout>
    )
}

export default HomePage