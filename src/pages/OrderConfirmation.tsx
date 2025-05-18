
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg text-left mb-8">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Order Number:</span> {orderNumber}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Date:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> A confirmation email will be sent shortly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-ecommerce-primary hover:bg-ecommerce-secondary">
                <Link to="/">
                  Return to Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
