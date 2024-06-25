'use client'

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./action";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const [configId, setConfigId] = useState<string | null>(null);
  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) setConfigId(configurationId);

  }, []);
  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => getAuthStatus(),

    // retry until the new user's data create on data base;
    retry: true,
    // retryDelay means ===> it will retry in every 500 m s 
    retryDelay: 500,
  })

  if (data?.success) {
    if (configId) {
      localStorage.removeItem("configurationId")
      router.push(`/configure/preview?id=${configId}`)
    } else {
      router.push('/')
    }
  }


  return (
    <div className="w-full flex mt-24 justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in..</h3>
        <p>You will ve redirected automatically</p>
      </div>

    </div>
  );
};

export default Page;