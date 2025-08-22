"use client";
import Navbar from '@/components/Navbar';
import React, { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import ClickSpark from '@/components/Reactbit/ClickSpark/ClickSpark';
import Cookies from '@/components/Cookies';

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
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                <Navbar />
                <Cookies />
                {children}
            </ClickSpark>
        </div>
    );
};

export default WrapperLayout;
