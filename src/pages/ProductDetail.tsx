
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { getProductById, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(Number(id));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for does not exist.</p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={`${product.image}?auto=format&fit=crop&w=800&h=600`}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2">
              <nav className="mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-500">
                  <li>
                    <Link to="/" className="hover:text-ecommerce-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-1">/</span>
                  </li>
                  <li>
                    <Link to="/products" className="hover:text-ecommerce-primary">
                      Products
                    </Link>
                  </li>
                  <li>
                    <span className="mx-1">/</span>
                  </li>
                  <li className="text-gray-900 font-medium">
                    {product.name}
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-ecommerce-primary mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {product.details && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                  <p className="text-gray-600">{product.details}</p>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <Link 
                  to={`/products?category=${product.category}`} 
                  className="inline-block bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm"
                >
                  {product.category}
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart} 
                className="w-full bg-ecommerce-primary hover:bg-ecommerce-secondary"
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
