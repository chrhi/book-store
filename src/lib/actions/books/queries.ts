import Book, { IBook } from "../../simplae-modals/books";
import { FilterQuery, SortOrder } from "mongoose";

interface BookQueryOptions {
  /**
   * Filter options for querying books
   */
  filter?: FilterQuery<IBook>;

  /**
   * Sorting options.
   * Example: { price: 'asc', year: 'desc' }
   */
  sort?: { [key: string]: SortOrder };

  /**
   * Pagination options
   */
  pagination?: {
    page?: number;
    limit?: number;
  };
}

/**
 * Retrieves books from the database with optional filtering, sorting, and pagination
 * @param options Query options for selecting books
 * @returns Promise resolving to an object with books and total count
 */
export async function selectBooks(options: BookQueryOptions = {}) {
  try {
    // Destructure options with default values
    const {
      filter = {},
      sort = { createdAt: -1 },
      pagination = { page: 1, limit: 10 },
    } = options;

    // Calculate skip value for pagination
    const { page = 1, limit = 10 } = pagination;
    const skip = (page - 1) * limit;

    // Perform the database query
    const [books, totalCount] = await Promise.all([
      Book.find(filter).sort(sort).skip(skip).limit(limit).lean(), // Use .lean() for better performance
      Book.countDocuments(filter),
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);

    return {
      books,
      pagination: {
        currentPage: page,
        totalPages,
        totalBooks: totalCount,
        booksPerPage: limit,
      },
    };
  } catch (error) {
    console.error("Error selecting books:", error);
    throw new Error("Failed to retrieve books");
  }
}
