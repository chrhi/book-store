import BookShowcase from "@/components/book-showcase";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/books-reel";

const Page = async ({}) => {
  return (
    <div className="w-full min-h-screen h-fit mt-[160px] pt-16 ">
      <MaxWidthWrapper className="my-8 h-fit">
        <BookShowcase />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit my-8 ">
        <ProductReel
          // these books they were comming from the database but i removed the action call
          books={[]}
          title="Tuote-ehdotukset"
          desc="Ehdotukset perustuvat esitetyn tuotteen tekijään, tuoteryhmään tai aiheisiin."
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
