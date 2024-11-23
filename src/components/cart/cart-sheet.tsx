"use client";

import { useCartStore } from "@/lib/store/cart";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import CartItem from "./cart-item";

export default function CartSheet({ onClose }: { onClose: () => void }) {
  const { items, getTotalPrice } = useCartStore();
  const t = useTranslations("Cart.CartSheet");

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle className="text-primary-foreground">
          {t("title")}
        </SheetTitle>
      </SheetHeader>
      <div className="flex-grow overflow-auto py-4 flex flex-col justify-center items-center">
        {items.length === 0 ? (
          <p className="text-primary-foreground">{t("empthyCart")}</p>
        ) : (
          items.map(
            ({
              id,
              name,
              href,
              imageAlt,
              imageSrc,
              price,
              quantity,
              color,
            }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                href={href}
                imageAlt={imageAlt}
                imageSrc={imageSrc}
                price={price}
                quantity={quantity}
                color={color}
              />
            )
          )
        )}
      </div>
      {items.length > 0 && (
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-primary-foreground">
            <p>Subtotal</p>
            <p>${getTotalPrice()}</p>
          </div>
          <p className="mt-0.5 text-sm text-primary-foreground/70">
            {t("info")}
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              {t("button1")}
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              {t("link")}{" "}
              <Button
                type="button"
                onClick={onClose}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("button2")}
                <span aria-hidden="true"> &rarr;</span>
              </Button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
