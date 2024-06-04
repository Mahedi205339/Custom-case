import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 flex lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <Image src="/monkey1.png" alt="" width={100} height={100} />

            </div>

            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image on a <span className="bg-green-600 px-2"> Custom</span> Phone Case!
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap lg:text-lg">
              Capture your favorite memories with your own, {' '} <span className="font-semibold"> one-of-one</span> phone case.
              CustomCase allows you to protect your memories, not just your phone case.

            </p>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:text-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-500" />
                  High-quality, durable material.
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-500" />
                  5 years print guarantee
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-500" />
                  All Modern Android and iPhone supported
                </li>
              </div>

            </ul>

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div>
                <Image src="/monkey1.png" alt="" width={100} height={100} />
              </div>
              <h5>Our pleasure</h5>
            </div>

            <div>
              {/* reviews form user */}





            </div>


          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
