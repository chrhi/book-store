"use server";

import { headers } from "next/headers";
import vendors from "@/vendors.json";
import { Vendor } from "@/types";

// Create a Map for O(1) lookup instead of using .find()
const vendorMap = new Map(vendors.map((vendor) => [vendor.domain, vendor]));

export default async function getVendor(): Promise<Vendor | null> {
  const awaitedHeaders = await headers();

  const domain = awaitedHeaders.get("host");

  console.log("this is the domain");
  console.log(domain);

  // Early return if no domain
  if (!domain) return null;

  return vendorMap.get(domain) || null;
}
