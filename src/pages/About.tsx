
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-ecommerce-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About ShopEasy</h1>
            <p className="text-xl max-w-3xl">
              Your trusted destination for quality products and exceptional
              shopping experiences.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, ShopEasy began with a simple mission: to make
                online shopping truly easy and enjoyable. We believe that finding
                and purchasing quality products shouldn't be complicated or
                stressful.
              </p>
              <p className="text-gray-600">
                What started as a small venture has grown into a trusted online
                destination for customers looking for a curated selection of
                high-quality products across various categories. We're proud to
                serve thousands of satisfied customers and continue to grow our
                offerings based on your feedback and needs.
              </p>
            </div>
            <div className="relative h-80 lg:h-auto rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=600"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-ecommerce-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ecommerce-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We carefully select every product in our catalog to ensure the
                  highest quality standards. Your satisfaction is our priority.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-ecommerce-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ecommerce-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
                <p className="text-gray-600">
                  We strive to make your shopping experience as simple and
                  straightforward as possible, from browsing to checkout.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-ecommerce-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ecommerce-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear, honest communication. From pricing to
                  product details, what you see is what you get.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-gray-600 mb-8">
              ShopEasy is more than just an online store—it's a community of
              like-minded individuals who appreciate quality, convenience, and
              excellent service. We're constantly growing and improving based on
              your feedback.
            </p>
            <p className="text-gray-600">
              Thank you for choosing ShopEasy. We look forward to serving you and
              exceeding your expectations.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
