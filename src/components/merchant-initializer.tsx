"use client";

import { useEffect } from "react";
import { useMerchantStore } from "@/store/useMerchantStore";

interface MerchantInitializerProps {
  merchantId: number;
  merchantName: string | null;
  theme: {
    primary: string;
    secondary: string;
  };
  children: React.ReactNode;
}

export function MerchantInitializer({
  merchantId,
  merchantName,
  theme,
  children,
}: MerchantInitializerProps) {
  const setMerchant = useMerchantStore((state) => state.setMerchant);
  const setMerchantDetails = useMerchantStore(
    (state) => state.setMerchantDetails
  );

  useEffect(() => {
    setMerchant(merchantId, window.location.hostname);
    setMerchantDetails({
      merchantName,
      theme,
    });
  }, [merchantId, merchantName, theme, setMerchant, setMerchantDetails]);

  return <>{children}</>;
}
