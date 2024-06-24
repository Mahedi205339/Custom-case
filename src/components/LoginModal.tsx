// import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';

const LoginModal = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent className='absolute z-[999]'>
                <DialogHeader>
                    <div className='relative mx-auto w-24 mb-2'>
                    <Image src="/monkey1.png" alt='monkey image' className='object-contain'fill />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
