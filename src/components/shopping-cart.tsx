import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Ghost, ShoppingCart } from "lucide-react";

export function ShoppingCard() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex-shrink-0">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="w-full h-screen flex flex-col items-center justify-center gap-y-8">
          <Ghost strokeWidth={2} className="w-12 h-12 " />
          <p className="flex items-center font-bold text-2xl">
            kortti on tyhjä
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
