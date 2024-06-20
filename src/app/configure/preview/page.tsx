import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    }
}

const page = async ({ searchParams }: PageProps) => {

    const { id } = searchParams;
    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
     where:{id},
    })

    return (
        <div>

        </div>
    );
};

export default page;