/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchBooks(filters: Record<string, any>) {
  try {
    // Convert filters to query parameters
    const queryParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(filters).map(([k, v]) => [k, String(v)])
      )
    ).toString();

    // Fetch books from your API endpoint using fetch
    const response = await fetch(`/api/search?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    // Return a default structure in case of error
    return {
      books: [],
      totalResults: 0,
      totalPages: 0,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }
}
