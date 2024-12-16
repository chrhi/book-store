/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import FilterSidebar, { FilterMobile } from "@/components/filter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SearchBookCard from "@/components/search-book-card";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { BookIcon } from "lucide-react";
import { fetchBooks } from "@/lib/api-calls/fetch-books";
import { useRouter } from "next/navigation";

interface SearchPageClientProps {
  initialBooks: any[];
  initialTotalResults: number;
  initialTotalPages: number;
  initialCurrentPage: number;
  initialItemsPerPage: number;
  initialSortBy: string;
  initialFilters: any;
}

export default function SearchPageClient({
  initialBooks,
  initialTotalResults,
  initialTotalPages,
  initialCurrentPage,
  initialItemsPerPage,
  initialSortBy,
  initialFilters,
}: SearchPageClientProps) {
  const router = useRouter();

  // Local state for dynamic filtering and pagination
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [books, setBooks] = useState(initialBooks);
  const [totalResults, setTotalResults] = useState(initialTotalResults);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const updateFilters = async (updatedFilters: any) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);

    // Create query string
    const queryParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(newFilters).map(([k, v]) => [k, String(v)])
      )
    ).toString();

    // Update URL
    router.push(`/search?${queryParams}`);

    // Fetch new data
    try {
      const data = await fetchBooks(newFilters);
      setBooks(data.books);
      setTotalResults(data.totalResults);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Error updating filters:", error);
    }
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    updateFilters({ sortBy: newSort, page: 1 });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    updateFilters({ itemsPerPage: newItemsPerPage, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    updateFilters({ page: newPage });
  };

  const onClearFilters = () => {
    const defaultFilters = {
      type: "all",
      author: "",
      title: "",
      language: "",
      isbn: "",
      productGroup: "",
      publisher: "",
      printYear: "",
      subject: "",
      condition: 6,
      days: 5,
      sortBy: "author",
      page: 1,
      itemsPerPage: 10,
    };

    updateFilters(defaultFilters);
  };

  return (
    <>
      <MaxWidthWrapper className="my-4 mt-[160px] pt-16">
        <h2 className="text-4xl font-bold playfair-display">Haku</h2>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-4">
        <div className="w-full min-h-screen flex h-fit items-start justify-start">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            updateFilters={updateFilters}
            onClearFilters={onClearFilters}
          />

          <div className="w-full flex-grow min-h-[400px] h-fit">
            <div className="w-full min-h-[300px] h-fit flex flex-col gap-y-4">
              <div className="w-full h-[100px] flex justify-between space-y-2 px-4 md:px-8">
                <div className="h-full w-fit">
                  <h2 className="text-3xl md:text-5xl font-bold playfair-display">
                    Hakutulokset
                  </h2>
                  <p>
                    Haulla löytyi {totalResults} tuotetta (sivu {currentPage} /{" "}
                    {totalPages})
                  </p>
                </div>
                <FilterMobile
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  updateFilters={updateFilters}
                  onClearFilters={onClearFilters}
                />
              </div>

              <div className="flex flex-col md:flex-row items-start justify-start gap-y-2 md:items-center md:justify-between px-4 md:px-8">
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[380px]">
                    <SelectValue placeholder="Tekijän mukaan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="author">Tekijän mukaan</SelectItem>
                    <SelectItem value="title">Nimen mukaan</SelectItem>
                    <SelectItem value="price">Hinnan mukaan</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-x-4 items-center">
                  <span>Tuloksia sivulla</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) =>
                      handleItemsPerPageChange(parseInt(value))
                    }
                  >
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder={itemsPerPage.toString()} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="w-full h-fit flex flex-col gap-y-4 px-4 md:px-8">
                {books.length === 0 ? (
                  <div className="w-full py-16 flex flex-col items-center justify-center text-gray-500">
                    <BookIcon size={48} className="mb-4" />
                    <p className="text-lg">Ei hakutuloksia</p>
                  </div>
                ) : (
                  <div>
                    {books.map((item) => (
                      <SearchBookCard key={item._id} book={item} />
                    ))}
                  </div>
                )}
              </div>

              <div className="pagination-container flex gap-2 justify-center items-center mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>

                {[...Array(totalPages).keys()].map((i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded ${
                      i + 1 === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
