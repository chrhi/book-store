/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import SearchPageClient from "./client-page";
import SearchPageLoading from "./loading";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface SearchParams {
  type?: string;
  author?: string;
  title?: string;
  language?: string;
  isbn?: string;
  productGroup?: string;
  publisher?: string;
  printYear?: string;
  subject?: string;
  condition?: string;
  days?: string;
  sortBy?: string;
  page?: string;
  itemsPerPage?: string;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Prepare filters with defaults
  const filters = {
    type: searchParams.type || "all",
    author: searchParams.author || "",
    title: searchParams.title || "",
    language: searchParams.language || "",
    isbn: searchParams.isbn || "",
    productGroup: searchParams.productGroup || "",
    publisher: searchParams.publisher || "",
    printYear: searchParams.printYear || "",
    subject: searchParams.subject || "",
    condition: parseInt(searchParams.condition || "6"),
    days: parseInt(searchParams.days || "5"),
    sortBy: searchParams.sortBy || "author",
    page: parseInt(searchParams.page || "1"),
    itemsPerPage: parseInt(searchParams.itemsPerPage || "10"),
  };

  // Fetch initial data from API route
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?${new URLSearchParams(
      filters as any
    ).toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const initialData = await response.json();

  return (
    <Suspense fallback={<SearchPageLoading />}>
      <SearchPageClient
        initialBooks={initialData.books}
        initialTotalResults={initialData.totalResults}
        initialTotalPages={initialData.totalPages}
        initialCurrentPage={filters.page}
        initialItemsPerPage={filters.itemsPerPage}
        initialSortBy={filters.sortBy}
        initialFilters={filters}
      />
    </Suspense>
  );
}
