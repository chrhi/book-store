import BookShowcase from "@/components/book-showcase";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/books-reel";
import { GetAllBooks } from "@/lib/actions/books.actions";

const Page = async ({}) => {
  const BOOKS = await GetAllBooks();
  return (
    <div className="w-full min-h-screen h-fit mt-[160px] pt-16 ">
      <MaxWidthWrapper className="my-8 h-fit">
        <BookShowcase />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit my-8 ">
        <ProductReel
          books={BOOKS.books}
          title="Tuote-ehdotukset"
          desc="Ehdotukset perustuvat esitetyn tuotteen tekijään, tuoteryhmään tai aiheisiin."
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
