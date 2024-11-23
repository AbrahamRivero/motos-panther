import { Button } from "@/components/ui/button";
import { X, Trash2 } from "lucide-react";
import { CartItemInterface, useCartStore } from "@/lib/store/cart";

const CartItem = ({
  id,
  imageAlt,
  imageSrc,
  name,
  href,
  price,
  color,
  quantity,
}: CartItemInterface) => {
  const { removeItem } = useCartStore();
  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img alt={imageAlt} src={imageSrc} className="size-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-primary-foreground">
            <h3>
              <a href={href}>{name}</a>
            </h3>
            <p className="ml-4">{price}</p>
          </div>
          <p className="mt-1 text-sm text-primary-foreground/70">{color}</p>
        </div>
        <div className="flex flex-1 justify-between items-center text-sm">
          <p className="text-gray-500 flex items-center">
            <X className="w-3 h-3 mr-1.5" /> {quantity}
          </p>

          <div className="flex">
            <Button
              type="button"
              size="icon"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeItem(id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
