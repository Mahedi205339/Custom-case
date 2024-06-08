"use client"
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";

const PHONES = [
    ""
]

function ReviewGrid() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const inInView = useInView(containerRef, { once: true, amount: 0.4 })


    return <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"> </div>
}


export function Reviews() {
    return (<MaxWidthWrapper className="relative max-w-5xl">

        <img aria-hidden="true" src="/what-people-are-buying" alt="" className="absolute select-none hidden xl:block -left-32 top-1/3" />

    </MaxWidthWrapper>)
}