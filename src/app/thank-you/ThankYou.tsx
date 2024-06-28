'use client'

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./action";

const ThankYou = () => {

    const {} = useQuery({
        queryKey:["get-payment-status"],
        queryFn: async () => getPaymentStatus(),
    })

    return (
        <div className="">
            
        </div>
    );
};

export default ThankYou;