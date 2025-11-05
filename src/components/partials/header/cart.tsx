import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
// import ProductCounterButton from "@/components/ecommarce/product-counter-button";

export function Cart() {
  const cartProducts = [
    {
      id: 1,
      productImage:
        "/images/e-commerce/product-card/classical-black-tshirt.png",
    },
    {
      id: 2,
      productImage: "/images/e-commerce/product-card/black-t-shirt.png",
    },
    {
      id: 3,
      productImage: "/images/e-commerce/product-card/check-shirt.png",
    },
    {
      id: 4,
      productImage: "/images/e-commerce/product-card/gray-jumper.png",
    },
    {
      id: 5,
      productImage: "/images/e-commerce/product-card/gray-t-shirt.png",
    },
    {
      id: 6,
      productImage: "/images/e-commerce/product-card/pink-blazer.png",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="focus:ring-none md:bg-secondary text-secondary-foreground relative flex cursor-pointer flex-col items-center justify-center rounded-full focus:outline-hidden md:h-8 md:w-8"
        >
          <Icon icon="heroicons:shopping-cart" className="h-5 w-5" />
          <Badge
            className="absolute bottom-[calc(100%-10px)] left-[calc(100%-12px)] h-4 w-4 items-center justify-center rounded-full p-0 text-[8px] font-semibold"
            color="destructive"
          >
            0
          </Badge>
        </button>
      </SheetTrigger>
      <SheetContent
        overlayClass="bg-transparent backdrop-blur-none"
        className="flex flex-col p-0"
      >
        <SheetHeader className="border-default-100 flex-none items-start space-y-1 border-b px-6 py-4">
          <SheetTitle className="text-default-900 text-xl font-medium">
            Cart
          </SheetTitle>
          <SheetDescription className="text-default-600 text-sm font-light">
            Total Price $0
          </SheetDescription>
        </SheetHeader>
        {cartProducts.length > 0 ? (
          <ScrollArea className="h-full">
            <div className="divide-border h-full divide-y">
              {cartProducts.map((product, i) => (
                <div className="last: flex gap-4 px-4 py-3 first:pt-0" key={i}>
                  <div className="mt-0.5 flex-none">
                    <div className="bg-default-200 dark:bg-default-600 h-14 w-14 rounded md:h-20 md:w-20">
                      <Image
                        src={product.productImage}
                        alt=""
                        className="h-full w-full object-cover p-3"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-default-900 text-sm font-normal md:text-base">
                      Classical Black T-Shirt Classical Black T-Shirt
                    </div>
                    <div className="text-default-500 pb-2 text-sm">
                      Price: <span className="text-xs">$489</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* <ProductCounterButton /> */}
                      <Button
                        size="icon"
                        className="bg-default-300/80 text-default-800 hover:bg-destructive hover:text-destructive-foreground h-8 w-8 rounded-full hover:ring-0 hover:ring-transparent"
                      >
                        <Icon icon="heroicons:trash" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex h-full flex-1 flex-col items-center justify-center">
            <div className="bg-default-200/60 relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full">
              <Icon
                icon="solar:cart-2-bold-duotone"
                className="relative h-32 w-32"
              />
            </div>
          </div>
        )}

        <SheetFooter className="border-default-100 block flex-none border-t p-6">
          <div className="flex">
            <div className="text-default-900 flex-1 text-base leading-none font-medium">
              Subtotal
            </div>
            <div className="text-default-900 flex-none text-base leading-none font-medium">
              $0
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button className="flex-1">Continue to Shipping</Button>
            <Button className="flex-1">View Cart</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
