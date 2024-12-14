"use server";

import { headers } from "next/headers";
import vendors from "@/vendors.json";

// Create a Map for O(1) lookup instead of using .find()
const vendorMap = new Map(vendors.map((vendor) => [vendor.domain, vendor]));

export default async function getVendor() {
  const domain = headers().get("host");

  // Early return if no domain
  if (!domain) return null;

  // Use Map.get() for O(1) lookup instead of .find()
  return vendorMap.get(domain) || null;
}
