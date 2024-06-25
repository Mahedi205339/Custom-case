'use client'

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./action";

const Page = () => {

  const [configId, setConfigId] = useState<string | null>(null);
  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) setConfigId(configurationId);

  }, []);
  const { } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => getAuthStatus(),

    // retry until the new user's data create on data base;
    retry: true,
    // retryDelay means ===> it will retry in every 500 m s 
    retryDelay: 500,
  })


  return (
    <div>

    </div>
  );
};

export default Page;