import { getBooksAction } from "@/lib/actions/product.action";
import ClientPage from "./client-page";

const SearchPage = async () => {
  const [books] = await Promise.all([getBooksAction()]);

  if (!books) {
    return (
      <div className="w-full h-screen">
        <h2 className="text-3xl font-bold">this page is not completed yet</h2>
      </div>
    );
  }
  //@ts-expect-error the book error is working
  return <ClientPage books={books} />;
};

export default SearchPage;
