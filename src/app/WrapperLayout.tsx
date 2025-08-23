"use client";
import Navbar from '@/components/Navbar';
import React, { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import ClickSpark from '@/components/Reactbit/ClickSpark/ClickSpark';
import Cookies from '@/components/Cookies';
import Footer from '@/components/Footer';

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

const WrapperLayout = ({ children, className }: WrapperProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        // cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className={className}>
            <ClickSpark
                sparkColor='#000'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                <Navbar />
                {/* <Cookies /> */}
                {children}
                <Footer />
            </ClickSpark>
        </div>
    );
};

export default WrapperLayout;
