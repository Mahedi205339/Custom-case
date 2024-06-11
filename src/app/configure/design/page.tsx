import React from 'react';

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


const page = async ({ searchParams }: PageProps) => {
    //make db call here
    const { id } = searchParams



    return (
        <div>
            {id}
        </div>
    );
};

export default page;