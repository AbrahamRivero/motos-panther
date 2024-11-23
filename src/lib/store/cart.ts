import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItemInterface {
  id: number;
  imageAlt: string;
  imageSrc: string;
  name: string;
  href: string;
  price: number;
  color?: string;
  quantity: number;
}

interface CartStore {
  items: CartItemInterface[];
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      updateQuantity: (id, newQuantity) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex((i) => i.id === id);
          if (existingItemIndex !== -1) {
            if (newQuantity <= 0) {
              // Remove item if quantity is 0 or less
              return {
                items: state.items.filter(
                  (_, index) => index !== existingItemIndex
                ),
              };
            } else {
              // Update quantity
              const updatedItems = [...state.items];
              updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: newQuantity,
              };
              return { items: updatedItems };
            }
          } else if (newQuantity > 0) {
            // Add new item if it doesn't exist and quantity is positive
            return {
              items: [
                ...state.items,
                { id, quantity: newQuantity } as CartItemInterface,
              ],
            };
          }
          return state; // No changes if item doesn't exist and quantity is 0 or less
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "cart-storage",
    }
  )
);
