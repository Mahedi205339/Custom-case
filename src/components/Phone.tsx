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
            <Image
                src={dark ? '/phone-template-dark-edges.png'
                    : '/phone-template-white-edges.png'
                }
                className='pointer-events-none z-50 select-none' width={400} height={800} alt='' />

            <div className='absolute -z-10 inset-0'>.
                <Image  width={400} height={800} className='object-cover'
                    src={imgSrc}
                    alt='overlaying phone image'
                />

            </div>
        </div>
    );
};

export default Phone;