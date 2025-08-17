import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode;
    className?: string
}

const WrapperLayout = ({ children, className }: WrapperProps) => {
    return (
        <div className={className}>
            <Navbar />
            {children}
        </div>
    )
}

export default WrapperLayout