import WrapperLayout from '@/app/WrapperLayout'
import CircularText from '@/components/Reactbit/CircularText/CircularText'
import GlareHover from '@/components/Reactbit/GlareHover/GlareHover'
import ShinyText from '@/components/Reactbit/ShinyText/ShinyText'
import SplitText from '@/components/Reactbit/SplitText/SplitText'
import React from 'react'

const HomePage = () => {
    return (
        <WrapperLayout className='relative '>
            <iframe src='https://my.spline.design/thresholddarkambientuicopy-TdFiRssh4jmmRXTHTQPp1U0N/' className="w-full absolute top-0 left-0 h-dvh bg-black"></iframe>
            <div className="absolute md:bottom-8 bottom-2 left-5">
                <CircularText
                    text="FULL STACK DEVELOPMENT "
                    onHover="speedUp"
                    spinDuration={20}
                    className="font-normal"
                />
            </div>
            <div className="h-dvh  w-full flex items-center justify-center flex-col">
                <div className='absolute bottom-4 cursor-default right-5 h-20'>
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        height='300'
                        transitionDuration={800}
                        playOnce={false}
                    >
                        <p className='cursor-default text-xs p-3 leading-snug text-zinc-300'>
                            We are the No #1 Software Development Company in UAE, to fulfill your needs
                        </p>
                    </GlareHover>
                </div>
                <SplitText
                    text="QUZEX"
                    className="md:text-9xl text-7xl tracking-widest text-center text-white"
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
                <ShinyText text="Web App, Application, UI/UX" disabled={false} speed={3} className='mt-6 z-10' />
            </div>

        </WrapperLayout>
    )
}

export default HomePage