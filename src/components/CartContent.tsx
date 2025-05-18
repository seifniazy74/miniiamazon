
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export const CartContent = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="mb-4 text-muted-foreground">Your cart is empty</p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto py-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center py-3 border-b border-gray-200 last:border-0"
          >
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={`${item.image}?auto=format&fit=crop&w=100&h=100`}
                alt={item.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2 text-gray-700">{item.quantity}</span>
                <button
                  type="button"
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 mt-auto">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Subtotal</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="/checkout">
            <Button className="w-full">Checkout</Button>
          </Link>
          <Button
            variant="outline"
            onClick={clearCart}
            className="w-full border-gray-300 text-gray-700"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
