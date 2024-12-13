import { NextResponse } from "next/server";
import { getAllBooks } from "@/lib/actions/product.action";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);

    // Destructure and parse query parameters with default values
    const {
      type = "all",
      author = "",
      title = "",
      isbn = "",
      productGroup = "",
      publisher = "",
      printYear = "",
      language = "",
      condition = "6",
      days = "5",
      sortBy = "author",
      page = "1",
      itemsPerPage = "30",
    } = Object.fromEntries(url.searchParams);

    // Parsing parameters with more robust type conversion
    const parsedCondition = Math.max(
      0,
      Math.min(6, parseInt(condition, 10) || 6)
    );
    const parsedDays = Math.max(1, Math.min(5, parseInt(days, 10) || 5));
    const currentPage = Math.max(1, parseInt(page, 10) || 1);
    const parsedItemsPerPage = Math.max(
      1,
      Math.min(100, parseInt(itemsPerPage, 10) || 30)
    );

    // Fetch books only once
    const allBooks = await getAllBooks();

    // Memoize string transformations for performance
    const normalizedAuthor = author.toLowerCase();
    const normalizedTitle = title.toLowerCase();
    const normalizedLanguage = language.toLowerCase();
    const normalizedPublisher = publisher.toLowerCase();

    // Optimize filtering with early exits and reduced complexity
    const filteredBooks = allBooks.filter((book) => {
      // Type filtering
      if (type !== "all" && (type === "new") !== book.tila) return false;

      // Quick text matching with early exits
      if (
        normalizedAuthor &&
        !book.tekija.toLowerCase().includes(normalizedAuthor)
      )
        return false;
      if (normalizedTitle && !book.nimi.toLowerCase().includes(normalizedTitle))
        return false;
      if (
        normalizedLanguage &&
        !book.kieli.toLowerCase().includes(normalizedLanguage)
      )
        return false;

      // Precise matching for other fields
      if (isbn && !book.isbn.includes(isbn)) return false;
      if (productGroup && book.tuoteryhma !== parseInt(productGroup, 10))
        return false;
      if (
        normalizedPublisher &&
        !book.kustantajaHaku.toLowerCase().includes(normalizedPublisher)
      )
        return false;
      if (printYear && book.painovuosi !== printYear) return false;

      // Condition filtering
      const bookConditionValue = parseInt(book.kunto.replace("K", ""), 10);
      if (parsedCondition !== 6 && bookConditionValue < parsedCondition)
        return false;

      // Days filtering with optimized date calculation
      const daysDifference = Math.floor(
        (Date.now() - new Date(book.pvm).getTime()) / (1000 * 60 * 60 * 24)
      );
      const maxDays = [1, 7, 14, 30, Infinity][parsedDays - 1];
      if (maxDays !== Infinity && daysDifference > maxDays) return false;

      return true;
    });

    // Sorting with optimized comparator
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      switch (sortBy) {
        case "author":
          return a.tekija.localeCompare(b.tekija);
        case "title":
          return a.nimi.localeCompare(b.nimi);
        case "price":
          return a.hinta - b.hinta;
        default:
          return 0;
      }
    });

    // Pagination with boundary checks
    const totalResults = sortedBooks.length;
    const totalPages = Math.ceil(totalResults / parsedItemsPerPage);
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const startIndex = (safeCurrentPage - 1) * parsedItemsPerPage;

    const paginatedBooks = sortedBooks.slice(
      startIndex,
      startIndex + parsedItemsPerPage
    );

    return NextResponse.json({
      books: paginatedBooks,
      totalResults,
      totalPages,
      currentPage: safeCurrentPage,
      itemsPerPage: parsedItemsPerPage,
    });
  } catch (error) {
    console.error("Error in book search:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
