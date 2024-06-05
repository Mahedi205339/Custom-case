import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}{...props}>
            <Image className='pointer-events-none z-50 select-none' src="" alt='' />
        </div>
    );
};

export default Phone;